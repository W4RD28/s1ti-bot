import { eq } from "drizzle-orm";

import { db } from "../db/db";
import { UserProfile } from "../db/schema/user-profile";
import type { UserProfileEntity } from "../entities/UserProfile";
import { takeUniqueOrThrow } from "../helpers/db.helper";

export class UserProfileService {
  async setOtherNames(userId: string, otherNames: string) {
    console.log(`Setting other names for user ${userId} to ${otherNames}`);

    try {
      await db.insert(UserProfile)
      .values({
        user_id: userId,
        other_names: otherNames
      })
      .onConflictDoUpdate({
        target: UserProfile.user_id,
        set: {
          other_names: otherNames
        }
      });
    } catch (error) {
      console.error(`Error while setting other names for user ${userId}: ${error}`);
    }

    console.log(`Successfully set other names for user ${userId} to ${otherNames}`);
  }

  async setBio(userId: string, bio: string) {
    console.log(`Setting bio for user ${userId} to ${bio}`);
    
    try {
      await db.insert(UserProfile)
      .values({
        user_id: userId,
        bio: bio
      })
      .onConflictDoUpdate({
        target: UserProfile.user_id,
        set: {
          bio: bio
        }
      });
    } catch (error) {
      console.error(`Error while setting bio for user ${userId}: ${error}`);
    }

    console.log(`Successfully set bio for user ${userId} to ${bio}`);
  }

  async getUserProfile(userId: string): Promise<UserProfileEntity | undefined> {
    console.log(`Getting profile for user ${userId}`);

    try {
      const query = await db.select()
        .from(UserProfile)
        .where(eq(UserProfile.user_id, userId))
        .execute()
        .then(takeUniqueOrThrow);

      const profile: UserProfileEntity = query;
      
      console.log(`Successfully got profile for user ${userId}`);
      return profile;
    } catch (error) {
      console.error(`Error while getting profile for user ${userId}: ${error}`);
    }
  }
}