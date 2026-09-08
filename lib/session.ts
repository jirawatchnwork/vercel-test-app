import "server-only";
import crypto from "crypto";

const SECRET = process.env.SESSION_SECRET ?? "dev-secret-change-me";
export const SESSION_COOKIE = "session";

function sign(value: string) {
  const hmac = crypto.createHmac("sha256", SECRET).update(value).digest("hex");
  return `${value}.${hmac}`;
}

function unsign(signed: string): string | null {
  const idx = signed.lastIndexOf(".");
  if (idx === -1) return null;

  const value = signed.slice(0, idx);
  const signature = signed.slice(idx + 1);
  const expected = crypto.createHmac("sha256", SECRET).update(value).digest("hex");

  if (signature.length !== expected.length) return null;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
    ? value
    : null;
}

export function createSessionValue(username: string) {
  return sign(username);
}

export function readSessionValue(cookieValue: string | undefined | null) {
  if (!cookieValue) return null;
  return unsign(cookieValue);
}
