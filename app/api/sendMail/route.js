import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required fields: name, email, and phone are required" 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create transporter with better configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Better connection settings
      pool: true,
      maxConnections: 1,
      maxMessages: 5,
    });

    // Enhanced email template with Airbnb-style design
    const emailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Travel Enquiry - BharatTrip</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f9fa;
    }
    
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e0e0e0;
    }
    
    .header {
      background: linear-gradient(135deg, #e11d48 0%, #f43f5e 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    
    .logo {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .tagline {
      opacity: 0.9;
      font-size: 16px;
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .section {
      margin-bottom: 30px;
    }
    
    .section-title {
      color: #e11d48;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
      border-bottom: 2px solid #fbb6ce;
      padding-bottom: 8px;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    
    .info-item {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 12px;
      border-left: 4px solid #e11d48;
    }
    
    .info-label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .info-value {
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }
    
    .message-box {
      background: #fef2f2;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #fecaca;
    }
    
    .message-label {
      color: #dc2626;
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .message-content {
      color: #444;
      line-height: 1.6;
    }
    
    .footer {
      background: #f8f9fa;
      padding: 25px 30px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    
    .priority-badge {
      display: inline-block;
      background: #dc2626;
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    
    .contact-info {
      color: #666;
      font-size: 14px;
      margin-top: 15px;
    }
    
    @media (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
      
      .header, .content {
        padding: 25px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <div class="logo">🏔️ BharatTrip</div>
      <div class="tagline">New Travel Enquiry Received</div>
    </div>
    
    <!-- Content -->
    <div class="content">
      <div class="priority-badge">🚨 HIGH PRIORITY - Customer Waiting</div>
      
      <div class="section">
        <div class="section-title">👤 Customer Information</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Full Name</div>
            <div class="info-value">${body.name}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email Address</div>
            <div class="info-value">
              <a href="mailto:${body.email}" style="color: #e11d48; text-decoration: none;">
                ${body.email}
              </a>
            </div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone Number</div>
            <div class="info-value">
              <a href="tel:${body.phone}" style="color: #e11d48; text-decoration: none;">
                ${body.phone}
              </a>
            </div>
          </div>
          <div class="info-item">
            <div class="info-label">Enquiry Time</div>
            <div class="info-value">${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              dateStyle: 'full', 
              timeStyle: 'medium' 
            })}</div>
          </div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">✈️ Trip Details</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Preferred Destination</div>
            <div class="info-value">${body.destination || 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Travel Dates</div>
            <div class="info-value">${body.dates || 'Flexible'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Number of Travelers</div>
            <div class="info-value">${body.travelers || 'Not specified'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Budget Range</div>
            <div class="info-value">${body.budget ? body.budget.replace(/_/g, ' ').toUpperCase() : 'Not specified'}</div>
          </div>
        </div>
      </div>
      
      ${body.message ? `
      <div class="section">
        <div class="section-title">💬 Customer Message</div>
        <div class="message-box">
          <div class="message-label">Special Requirements & Preferences:</div>
          <div class="message-content">${body.message}</div>
        </div>
      </div>
      ` : ''}
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <div style="color: #e11d48; font-weight: 600; margin-bottom: 10px;">
        ⚡ Required Action: Contact within 2 hours
      </div>
      <div class="contact-info">
        <strong>BharatTrip Travel Experts</strong><br>
        📞 <a href="tel:+918894322900" style="color: #666; text-decoration: none;">+91 88943 22900</a> | 
        ✉️ <a href="mailto:support@bharattrip.net" style="color: #666; text-decoration: none;">support@bharattrip.net</a>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version for email clients that don't support HTML
    const plainText = `
NEW TRAVEL ENQUIRY - BHARATTRIP
================================

CUSTOMER INFORMATION:
-------------------
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Enquiry Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

TRIP DETAILS:
------------
Destination: ${body.destination || 'Not specified'}
Travel Dates: ${body.dates || 'Flexible'}
Travelers: ${body.travelers || 'Not specified'}
Budget: ${body.budget || 'Not specified'}

${body.message ? `CUSTOMER MESSAGE:
----------------
${body.message}` : ''}

URGENT: Please contact customer within 2 hours.

--
BharatTrip Travel Experts
Phone: +91 88943 22900
Email: support@bharattrip.net
    `;

    const mailOptions = {
      from: {
        name: "BharatTrip Website",
        address: process.env.GMAIL_USER
      },
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: body.email, // Allow direct reply to customer
      subject: `🚨 New Travel Enquiry: ${body.name} - ${body.destination || 'India Trip'}`,
      text: plainText,
      html: emailTemplate,
      // Add headers for better email delivery
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    // Verify transporter connection first
    await transporter.verify();

    // Send email
    const result = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', result.messageId);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Enquiry sent successfully",
        messageId: result.messageId
      }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
        } 
      }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    return new Response(
      JSON.stringify({ 
        error: "Failed to send enquiry",
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
        } 
      }
    );
  }
}

// Optional: Add GET method for testing
export async function GET() {
  return new Response(
    JSON.stringify({ 
      message: "BharatTrip Email API is running",
      timestamp: new Date().toISOString()
    }),
    { 
      status: 200, 
      headers: { 
        'Content-Type': 'application/json',
      } 
    }
  );
}