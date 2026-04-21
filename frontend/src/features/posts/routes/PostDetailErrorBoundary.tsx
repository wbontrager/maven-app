import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function PostDetailErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 400:
        return <div className="p-10">Invalid post id.</div>;
      case 404:
        return <div className="p-10">Post not found.</div>;
      case 500:
        return <div className="p-10">Something went wrong.</div>;
      default:
        return <div className="p-10">Unexpected error.</div>;
    }
  }

  return <div className="p-10">Unknown error.</div>;
}

export default PostDetailErrorBoundary;