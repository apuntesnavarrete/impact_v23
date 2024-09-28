export const jwtConstants = {
  secret: process.env.JWT_SECRET || "default_secret", // fallback to a default if not set
};