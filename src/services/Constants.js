const BACKEND_API="https://dilah-profile-server.netlify.app/.netlify/functions/api";

export const baseURL = process.env.NODE_ENV === "production" ? BACKEND_API : ""
