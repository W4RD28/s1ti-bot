export interface UserProfileEntity {
  user_id: string;
  bio?: string | null;
  waifu?: string | null;
  resume?: string | null;
  other_names?: string | null;
  profession?: string | null;
  interest?: string | null;
  game?: string | null;
  book?: string | null;
  music?: string | null;
  anime?: string | null;
}