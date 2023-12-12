import React from "react";
import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div>
      <p>{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h3>{props.title}</h3>
      </Link>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
