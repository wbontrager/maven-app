import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Post } from '../../../types/post';
import { formatDate } from '../../../utils/dateFormatter';

function PostsList() {
    const posts = useLoaderData() as Post[];
    const navigate = useNavigate();

    return (
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <header className="mb-10">
                <p className="text-sm font-semibold uppercase text-indigo-600">Social Posts</p>
                <h1 className="mt-3 text-4xl font-semibold">
                    Explore recent & upcoming posts
                </h1>
                <p className="mt-4 text-base">
                    Browse your post feed and tap any item to see the full details.
                </p>
            </header>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full table-fixed divide-y divide-gray-200 bg-white text-left text-sm">
                    {/* Table Header */}
                    <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        <tr>
                            <th className="w-1/4 px-6 py-4">Title</th>
                            <th className="w-1/2 px-6 py-4 hidden sm:table-cell">Text</th>
                            <th className="w-1/4 px-6 py-4">Scheduled Date</th>
                            <th className="w-1/6 px-6 py-4"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {posts.map((post) => (
                            <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                                <td className="whitespace-nowrap px-6 py-4 font-bold">
                                    {post.title}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 hidden sm:table-cell truncate">
                                    {post.post_text ?? 'No description available.'}

                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    {post.scheduled_date
                                        ? formatDate(post.scheduled_date)
                                        : '—'}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-right">
                                    <button
                                        onClick={() => navigate(`/posts/${post.id}`)}
                                        className="rounded-lg p-2 font-light hover:font-medium transition-all hover:bg-gray-600/10"
                                        aria-label="View post"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
export default PostsList;