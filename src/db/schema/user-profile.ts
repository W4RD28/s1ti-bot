import { pgTable, varchar, text } from "drizzle-orm/pg-core";

export const UserProfile = pgTable("user_profile", {
  user_id: varchar().primaryKey(),
  other_names: text(),
  bio: text(),
  profession: text(),
  interest: text(),
  game: text(),
  book: text(),
  music: text(),
  anime: text(),
  waifu: text(),
  resume: text(),
});