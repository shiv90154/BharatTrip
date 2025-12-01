// app/api/auth/signup/route.js

export async function POST(request) {
  try {
    const { email, phone, name, password } = await request.json();

    // Validate input
    if (!name || !password) {
      return Response.json({ error: 'Name and password are required' }, { status: 400 });
    }

    if (password.length < 6) {
      return Response.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
    }

    // Mock user (no DB)
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email: email || null,
      phone: phone || null,
      name,
      createdAt: new Date().toISOString()
    };

    // Mock JWT token
    const token = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);

    return Response.json(
      {
        user,
        token,
        message: "Account created successfully"
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Signup error:", error);
    return Response.json({ error: "Failed to create account" }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
