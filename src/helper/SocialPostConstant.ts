export type POST_ON = "FACEBOOK" | "INSTAGRAM";

export const POST_ON_CONSTANT: {
  FACEBOOK: "FACEBOOK";
  INSTAGRAM: "INSTAGRAM";
} = {
  FACEBOOK: "FACEBOOK",
  INSTAGRAM: "INSTAGRAM",
};
export interface Post {
  content: string;
  author: string;
  media_urls?: string[];
  post_id: string | null;
  post_on: string;
//   type: string;
//   uid: string;
//   created_at: string;
//   updated_at: string;
}
