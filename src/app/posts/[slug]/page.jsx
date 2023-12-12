import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../utils/getPostMetadata";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main className="flex min-h-screen flex-col">
      <article className="w-full sm:w-5/6 md:w-[720px] md:text-xl mx-auto px-8 md:px-12 py-4 mt-48">
        <p className="text-base font-bold text-zinc-400 mb-1">{post.data.date}</p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-1 mt-1">{post.data.title}</h1>
        <h3 className="text-xl md:text-3xl font-medium text-zinc-500 mb-8 md:mb-12 mt-4">{post.data.subtitle}</h3>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
};

export default PostPage;
