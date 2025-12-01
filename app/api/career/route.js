import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting storage
const rateLimit = new Map();

export async function POST(req) {
  const clientIP = req.ip || req.headers.get('x-forwarded-for') || 'unknown';

  // Rate limiting: 5 requests per 15 minutes
  const now = Date.now();
  const windowStart = now - 15 * 60 * 1000;

  // ❌ FIXED: Removed TypeScript syntax
  const requests = (rateLimit.get(clientIP) || []).filter(ts => ts > windowStart);

  if (requests.length >= 5) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  requests.push(now);
  rateLimit.set(clientIP, requests);

  try {
    const body = await req.json();
    const { name, email, phone, role, message } = body;

    if (!name || !email || !phone || !role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Nodemailer config
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // Send emails (Admin + User)
    await Promise.all([
      transporter.sendMail({
        from: `"Bharat Trip Careers" <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_USER,
        subject: `New Career Application: ${name}`,
        html: `<h2>New Applicant</h2>
               <p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Role: ${role}</p>
               <p>Message: ${message}</p>`
      }),
      transporter.sendMail({
        from: `"Bharat Trip" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Thanks for applying!",
        html: `<h3>Hi ${name},</h3><p>We received your application.</p>`
      })
    ]);

    return NextResponse.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 }
    );

  } catch (err) {
    console.error("Career form error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { status: 'OK', message: 'Career endpoint is working' },
    { status: 200 }
  );
}
