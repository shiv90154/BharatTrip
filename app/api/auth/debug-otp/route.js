import { getOTPStats } from "@/utils/auth";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return Response.json(
      { error: "Not available in production" },
      { status: 403 }
    );
  }

  try {
    return Response.json(getOTPStats());
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
