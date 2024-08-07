import { useParams } from "react-router-dom";
import blogs from "../../../assets/constant/blogs";

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const blogPost = blogs?.find(post => post.id.toString() === id);

    if (!blogPost) {
        return <p className="text-center text-gray-500">Blog post not found.</p>;
    }

    return (
        <div className="bg-white py-8 px-4 mx-auto max-w-screen-lg my-32">
            <article className="prose lg:prose-xl">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-black mb-5">{blogPost.title}</h1>
                <p className="text-gray-500 dark:text-gray-400 my-5">{blogPost.date} - {blogPost.category}</p>
                <div className="flex items-center mb-4">
                    <img src={blogPost.authorImage} alt={`${blogPost.author} avatar`} className="w-12 h-12 rounded-full mr-3" />
                    <span className="text-gray-900 dark:text-black">{blogPost.author}</span>
                </div>
                <p className="text-lg text-gray-900 dark:text-gray-900">{blogPost.description}</p>
            </article>
        </div>
    );
};

export default BlogDetail;
