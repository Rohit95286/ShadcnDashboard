import React from "react";
import {
  Table,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import posts, {Post} from "@/data/postData";
import {Button} from "../button";
import Link from "next/link";

function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of recent posts</TableCaption>
      <TableHeader>
        <TableRow className="text-[12px]">
          <TableHead className="text-left"> Title</TableHead>
          <TableHead className="text-center hidden lg:table-cell">
            Author
          </TableHead>
          <TableHead className="text-right hidden lg:table-cell">
            Date
          </TableHead>
          <TableHead className="text-right hidden sm:table-cell">
            Edit
          </TableHead>
        </TableRow>
        {posts?.map(data => (
          <TableRow key={data?.id} className="text-[12px]">
            <TableCell className="text-left text-wrap">{data?.title}</TableCell>
            <TableCell className="text-center hidden lg:table-cell">
              {data?.author}
            </TableCell>
            <TableCell className="text-right hidden lg:table-cell">
              {data?.date}
            </TableCell>
            <TableCell className="text-right hidden sm:table-cell">
              <Button className="bg-blue-500 hover:bg-blue-800 text-white text-sm h-[30px] rounded-[3px]">
                <Link href={`/posts/${data?.id}`}>Edit</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableHeader>
    </Table>
  );
}

interface PostProps {
  data: Post[];
}

function PostTable({data}: PostProps) {
  return (
    <>
      <div className="mt-2 font-semibold text-[18px] font-sans overflow-x-hidden">
        Posts
        <TableDemo />
      </div>
    </>
  );
}

export default PostTable;
