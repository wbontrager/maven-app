import { fetchPosts } from "../api/postsApi";

export async function postListsLoader() {

  try {
    const res = await fetchPosts();

    return res.data;
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    throw new Response("Server error", { status: 500 });
  }
}