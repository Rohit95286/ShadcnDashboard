import AnalyticsDataComponent from "@/components/ui/baseComponents/analyticsData";
import {CardDemo} from "@/components/ui/baseComponents/dasboardCards";
import Post from "@/components/ui/baseComponents/post";
import posts from "@/data/postData";
import {ChartBarStacked, Folder, MessageCircleHeart, User} from "lucide-react";

export default function Home() {
  const notifications = [
    {
      title: "Posts",
      count: 12,
      icon: <Folder size={60} color="gray" />,
    },
    {
      title: "Categories",
      count: 85,
      icon: <ChartBarStacked size={60} color="gray" />,
    },
    {
      title: "Users",
      count: 21,
      icon: <User size={60} color="gray" />,
    },
    {
      title: "Comments",
      count: 34,
      icon: <MessageCircleHeart size={60} color="gray" />,
    },
  ];
  return (
    <>
      <div className="flex-col flex sm:flex-row justify-around align-middle gap-2 overflow-hidden">
        {notifications?.map(data => (
          <CardDemo key={data?.title} data={data} />
        ))}
      </div>

      <Post data={posts} />
      <AnalyticsDataComponent />
    </>
  );
}
