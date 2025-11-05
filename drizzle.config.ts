import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  console.warn("Warning: DATABASE_URL is not set. Database operations will not work.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://localhost:5432/tutorpro",
  },
});
