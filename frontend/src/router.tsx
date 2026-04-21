import { createBrowserRouter } from "react-router-dom";
import PostsList from "./features/posts/components/PostsList";
import PostDetail from "./features/posts/components/PostDetail";
import { postDetailLoader } from "./features/posts/routes/postDetailLoader";
import PostDetailErrorBoundary from "./features/posts/routes/PostDetailErrorBoundary";
import { postListsLoader } from "./features/posts/routes/postsListLoader";
import PostsListErrorBoundary from "./features/posts/routes/PostsListErrorBoundary";

export const router = createBrowserRouter([
    {
        index: true,
        element: <PostsList />,
        loader: postListsLoader,
        errorElement: <PostsListErrorBoundary />,
    },
    {
        path: "/posts",
        element: <PostsList />,
        loader: postListsLoader,
        errorElement: <PostsListErrorBoundary />,
    },
    {
        path: "/posts/:id",
        element: <PostDetail />,
        loader: postDetailLoader,
        errorElement: <PostDetailErrorBoundary />,
    },
]);