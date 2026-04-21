import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function PostsListErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 500:
        return <div className="p-10">Something went wrong.</div>;
      default:
        return <div className="p-10">Unexpected error.</div>;
    }
  }

  return <div className="p-10">Unknown error.</div>;
}

export default PostsListErrorBoundary;