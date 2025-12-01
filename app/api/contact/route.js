import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, tripType, travelers, budget, destination } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: "support@bharattrip.net",
      subject: `New Contact Form - ${name}`,
      html: `
        <h2>New Travel Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
        <p><b>Trip Type:</b> ${tripType}</p>
        <p><b>Travelers:</b> ${travelers}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Destination:</b> ${destination}</p>
      `
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Email Error:", error);
    return Response.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
