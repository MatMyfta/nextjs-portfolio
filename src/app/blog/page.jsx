import Navbar from "../components/Navbar";
import Link from "next/link";

import fs from "fs";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postpreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h3>{slug}</h3>
      </Link>
    </div>
  ));
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-8 md:px-12 py-4 mt-48">
        <h1>Hello blog!</h1>
        {postpreviews}
      </div>
    </main>
  );
}
