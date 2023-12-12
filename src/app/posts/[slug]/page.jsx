import Navbar from "../../components/Navbar";
import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-8 md:px-12 py-4 mt-48">
        <h1>This is a post: {slug}</h1>
        <Markdown>{content}</Markdown>
      </div>
    </main>
  );
};

export default PostPage;
