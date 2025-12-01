// app/api/send-mail/route.js

export async function POST(request) {
  try {
    const { subject, message, type } = await request.json();

    // For now — no email sending, just mock response
    console.log("Mail request received:", { subject, message, type });

    return Response.json({ message: "Mock: Email received (not sent)" });

  } catch (error) {
    console.error("Send mail error:", error);
    return Response.json({ error: "Failed to process email" }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
