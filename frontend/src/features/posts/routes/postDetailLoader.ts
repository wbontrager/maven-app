import type { LoaderFunctionArgs } from "react-router-dom";
import { fetchPostById } from "../api/postsApi";

export async function postDetailLoader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  if (!id) {
    throw new Response("Invalid post id", { status: 400 });
  }

  try {
    const res = await fetchPostById(id);

    if (!res.data) {
      throw new Response("Post not found", { status: 404 });
    }

    return res.data;
  } catch (err) {
    console.error("Failed to fetch post:", err);
    throw new Response("Server error", { status: 500 });
  }
}