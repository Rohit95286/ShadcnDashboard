import {CircleArrowLeft} from "lucide-react";
import Link from "next/link";
import React from "react";

function Post() {
  return (
    <>
      <Link
        href="/"
        className="flex  gap-1.5 underline text-blue-950 font-bold"
      >
        <CircleArrowLeft />
        Back to posts
      </Link>
    </>
  );
}

export default Post;
