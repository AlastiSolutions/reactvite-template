import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as ENV from "dotenv";

ENV.config();

const sql = neon(process.env.NEON_DB_URL!);

export const db = drizzle(sql);
