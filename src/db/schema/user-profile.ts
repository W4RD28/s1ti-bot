import { pgTable, varchar, text } from "drizzle-orm/pg-core";

export const UserProfile = pgTable("user_profile", {
  user_id: varchar().primaryKey(),
  bio: text(),
  waifu: text(),
  resume: text(),
});