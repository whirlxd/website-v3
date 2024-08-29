import Image from "next/image";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import { title } from "process";
import BlurIn from "@/components/magicui/blur-in";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const data = [
    {
      title: "2021",
      content: (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">2021</h1>
          <p className="text-lg text-center">
            This is a timeline of events that happened in 2021.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">2021</h1>
          <p className="text-lg text-center">
            This is a timeline of events that happened in 2021.
          </p>
        </div>
      ),
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BlurIn word="nigga"></BlurIn>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Timeline data={data} />
    </main>
  );
}
