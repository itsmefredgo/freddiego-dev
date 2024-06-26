"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import { Blog } from "@/sanity/sanityPropsInterface";

/**
 * Renders the list of blogs.
 * @param blogs The list of blogs to render.
 * @param className The class name to apply to the component.
 * @returns The rendered list of blogs.
 */
export const BlogsListComponent = ({
  blogs,
  className,
}: {
  blogs: Blog[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("", className)}>
      {blogs.map((blog, idx) => (
        <Link
          href={`/archive/blog/${blog.slug.current}`}
          key={`/archive/blog/${blog.slug.current}`}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 
                        dark:bg-slate-800/[0.8] block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.1 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0.05 },
                }}
              />
            )}
          </AnimatePresence>
          <BlogCard>
            <ProjectTitle>{blog.title}</ProjectTitle>
            <ProjectDate>
              {new Date(blog?.publishedAt).toDateString()}
            </ProjectDate>
            {blog.excerpt && (
              <ProjectAbstract>Abstract: {blog.excerpt}</ProjectAbstract>
            )}
          </BlogCard>
        </Link>
      ))}
    </div>
  );
};

// Blog card components for the blog list
export const BlogCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        ` rounded-xl h-full w-full pl-2 pt-2 pb-3 pr-6 hover:pl-4 hover:pr-2 
          duration-200 overflow-hidden bg-subBackground border-2 relative z-20
         border-slate-300 dark:border-slate-700`,
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const ProjectTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1 className={cn("text-text text-[1.5rem]", className)}>{children}</h1>
  );
};
export const ProjectAbstract = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={cn("mt-2 text-text text-md", className)}>{children}</p>;
};
export const ProjectDate = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-text text-[0.75rem]", className)}>{children}</p>
  );
};
