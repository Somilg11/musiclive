"use client";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { div, p } from "framer-motion/client";
import { BackgroundGradient } from "./ui/background-gradient";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <span className="font-extrabold tracking-tighter">curious?</span>{" "}
          <br />{" "}
          <span className="font-mono font-extralight">
            <i>join</i>
          </span>{" "}
          right away
        </motion.h1>
      </LampContainer>

      <div className="py-12 bg-gray-950 px-5">
        <div className="text-center">
          <h1 className="text-base text-white font-bold md:text-[30px] text-[20px] md:mb-12 mb-5 px-4">
            FEATURED COURSES
          </h1>
          <p className="text-base text-slate-800 font-bold md:text-[50px] text-[30px] mb-10 px-4">
            Learn With the Best
          </p>
        </div>
        <div className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                
                <div className="flex items-center justify-center antialiased text-sm">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{course.title}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
          {course.description}
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Link href={`/courses/${course.slug}`}>
            <Icon />
            </Link>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View all courses
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

export default FeaturedCourses;
