import jwt from "jsonwebtoken";

export const verifyAdmin = async (req) => {
  const token = req.cookies.get("token")?.value;

  if (!token) return { authorized: false };

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return { authorized: false };
    }

    return { authorized: true, user: decoded };

  } catch (err) {
    return { authorized: false };
  }
};
