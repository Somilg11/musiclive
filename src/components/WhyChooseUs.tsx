"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function WhyChooseUs() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full gap-10 flex-col">
      <h1 className="md:text-[80px] text-[40px] font-bold">Why choose us?</h1>
      <CardStack items={musicSchoolContent} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const musicSchoolContent = [
  {
    id: 0,
    name: "Discover Your Sound with Us",
    designation: "Senior Software Engineer",
    content: (
      <p>
        Embark on a <Highlight>musical journey</Highlight> that’s uniquely yours. Our <Highlight>personalized instruction</Highlight> adapts to your individual needs🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Limitless Learning Opportunities",
    designation: "Senior Instructor",
    content: (
      <p>
        With our expansive <Highlight>resource library</Highlight> and <Highlight>dynamic course</Highlight> offerings, you’ll never find yourself without something new to explore.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Music Club</Highlight> is that you do not talk about music
        club. The second rule of
        <Highlight>Music club</Highlight> is that you DO NOT TALK about music
        club.
      </p>
    ),
  },
];


export default WhyChooseUs