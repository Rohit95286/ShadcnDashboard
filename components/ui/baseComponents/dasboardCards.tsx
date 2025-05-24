import {BellRing, Check, Folder} from "lucide-react";
import {cn} from "@/lib/utils";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";

type CardProps = {
  data: {
    title: string;
    count: number;
    icon: React.ReactNode;
  };
};

export function CardDemo({data}: CardProps) {
  return (
    <Card className={cn("flex-1 bg-gray-100 rounded-sm")}>
      <CardHeader>
        <CardTitle className="text-gray-950  font-semibold text-xl">
          {data?.title}
        </CardTitle>
        <div className="flex justify-between mt-6 align-middle">
          {data?.icon}
          <p className="font-bold text-gray-700 text-3xl text-center">
            {data?.count}
          </p>
        </div>
      </CardHeader>
    </Card>
  );
}
