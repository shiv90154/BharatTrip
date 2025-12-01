import { generateOTP, storeOTP, sendOTPEmail, sendSMSOTP } from '@/utils/auth';

export async function POST(request) {
  try {
    const { email, phone } = await request.json();

    // Validate input
    if (!email && !phone) {
      return Response.json({ error: 'Email or phone number is required' }, { status: 400 });
    }

    // Validate email format if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    // Validate phone format if provided
    if (phone && !/^[6-9]\d{9}$/.test(phone)) {
      return Response.json({ error: 'Please enter a valid 10-digit phone number' }, { status: 400 });
    }

    const otp = generateOTP();
    const identifier = email || phone;

    // Store OTP
    await storeOTP(identifier, otp);

    let emailSent = true;
    let smsSent = true;

    // Send OTP via email if email provided
    if (email) {
      emailSent = await sendOTPEmail(email, otp);
      if (!emailSent) {
        console.log('❌ Email sending failed, but continuing with OTP storage');
      }
    }

    // Send OTP via SMS if phone provided
    if (phone) {
      smsSent = await sendSMSOTP(phone, otp);
      if (!smsSent) {
        console.log('❌ SMS sending failed, but continuing with OTP storage');
      }
    }

    // Prepare response
    const responseData = {
      success: true,
      message: 'OTP sent successfully',
      channel: email ? 'email' : 'sms',
      timestamp: new Date().toISOString(),
      // Don't send OTP in production, only for development
      ...(process.env.NODE_ENV === 'development' && { debug_otp: otp })
    };

    // Add debug info in development
    if (process.env.NODE_ENV === 'development') {
      responseData.debug_info = {
        stored_identifier: identifier,
        email_sent: emailSent,
        sms_sent: smsSent,
        otp_expires_in: `${process.env.OTP_EXPIRY_MINUTES || 10} minutes`
      };
    }

    return Response.json(responseData);

  } catch (error) {
    console.error('Send OTP error:', error);
    return Response.json({ 
      success: false,
      error: 'Failed to send OTP',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}