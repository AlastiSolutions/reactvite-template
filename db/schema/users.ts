import { pgTable, varchar, text, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("fullName"),
  phone: varchar("phone", { length: 256 }),
});

export type User = typeof users.$inferSelect;
