import type { Post } from '../../../types/post';

import { useLoaderData } from "react-router-dom";
import { formatDate, formatDateTime } from '../../../utils/dateFormatter';


function PostDetail() {
  const post = useLoaderData() as Post;
    
    return (

        <div className="mx-auto p-8">

            <header className="mb-10">
                <h1 className="mt-3 text-4xl font-semibold">
                    Post Details
                </h1>
            </header>

            <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-[160px_1fr]">
                <dt className="font-bold">Title</dt>
                <dd>{post.title}</dd>

                <dt className="font-bold">Post Text</dt>
                <dd className="leading-relaxed whitespace-pre-wrap">{post.post_text}</dd>

                <dt className="font-bold">Scheduled</dt>
                <dd>{post.scheduled_date ? formatDate(post.scheduled_date) : 'Not scheduled'}</dd>

                <dt className="font-bold">Created at</dt>
                <dd>{formatDateTime(post.created_at)}</dd>

                <dt className="font-bold">Updated at</dt>
                <dd>{formatDateTime(post.updated_at)}</dd>
            </dl>
        </div>
    );
}

export default PostDetail;