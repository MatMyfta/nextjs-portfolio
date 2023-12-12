import getPostMetadata from "../utils/getPostMetadata";
import PostPreview from "./components/PostPreview";

const Blog = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview
      key={post.slug}
      title={post.title}
      subtitle={post.subtitle}
      date={post.date}
      slug={post.slug}
    />
  ));

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-8 md:px-12 py-4 mt-48">
        <h1>Hello blog!</h1>
        {postPreviews}
      </div>
    </main>
  );
};

export default Blog;
