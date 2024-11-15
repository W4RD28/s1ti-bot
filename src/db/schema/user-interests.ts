import { pgTable, varchar, text, serial, bigserial } from "drizzle-orm/pg-core";
import { UserProfile } from "./user-profile";

export const UserInterests = pgTable("user_interests", {
  id: bigserial({ mode: 'number' }).primaryKey(),
  user_id: varchar().references(() => UserProfile.user_id, { onDelete: 'cascade' }),
  interests: text(),
});