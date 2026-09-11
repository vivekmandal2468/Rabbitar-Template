import React from "react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/logo";
import {
  FacebookMeta,
  GoogleSheetsIcon,
  InstagramIcon,
  SlackIcon,
} from "@/icons";
import { IconCircleDashedCheck } from "@tabler/icons-react";

export const SkeletonTwo = () => {
  return (
    <div
      className={cn(
        "flex-1 rounded-t-3xl absolute inset-x-0 p-2 gap-2 w-full mx-auto pt-40 flex items-center justify-center translate-y-12", 
      )}   
      style={{
        transform: "rotateX(20deg) rotateY(20deg) rotateZ(-20deg)",
      }}
    >
      <Circle className="flex items-center justify-center dark:bg-neutral-900">
        <LogoIcon className="size-10 text-neutral-500" />
         <div className="size-10 flex items-center justify-center bg-white dark:bg-neutral-800 border border-transparent shadow-black/10 ring-1 ring-black/10 dark:ring-white/10 rounded-sm animate-orbit [--initial-position:80deg] [--translate-position:120px] absolute inset-0 m-auto [--orbit-duration:10s]">
          <SlackIcon className="size-6"/>
        </div>
        <div className="size-10 flex items-center justify-center bg-white dark:bg-neutral-800 border border-transparent shadow-black/10 ring-1 ring-black/10 dark:ring-white/10 rounded-sm animate-orbit [--initial-position:140deg] [--translate-position:160px] absolute inset-0 m-auto [--orbit-duration:15s]">
          <FacebookMeta className="size-6" />
        </div>
        <div className="size-10 flex items-center justify-center bg-white dark:bg-neutral-800 border border-transparent shadow-black/10 ring-1 ring-black/10 dark:ring-white/10 rounded-sm animate-orbit [--initial-position:240deg] [--translate-position:200px] absolute inset-0 m-auto [--orbit-duration:20s]">
          <InstagramIcon className="size-6" />
        </div>
        <div className="size-10 flex items-center justify-center bg-white dark:bg-neutral-800 border border-transparent shadow-black/10 ring-1 ring-black/10 dark:ring-white/10 rounded-sm animate-orbit [--initial-position:20deg] [--translate-position:220px] absolute inset-0 m-auto [--orbit-duration:25s]">
          <GoogleSheetsIcon className="size-6" />
        </div>
        <div className="w-72 flex items-center justify-center border border-transparent shadow-black/10 ring-black/10 dark:ring-white/10 rounded-sm animate-orbit [--translate-position:250px] absolute inset-0 m-auto [--orbit-duration:30s] ring-0 shadow-none bg-transparent">
          <SkeletonCard
            className="absolute bottom-0 left-12 z-30 max-w-[80%]"
            icon={<IconCircleDashedCheck className="size-4 text-neutral-500 dark:text-neutral-400" />}
            title="Campaign Planner"
            description="Creates clear, ready-to-use campaign briefs using product info."
          />
        </div>
        <div className="w-60 flex items-center justify-center border border-transparent shadow-black/10 ring-black/10 dark:ring-white/10 rounded-sm animate-orbit [--translate-position:210px] absolute inset-0 m-auto [--orbit-duration:20s] ring-0 shadow-none bg-transparent">
          <SkeletonCard
            className="absolute bottom-0 left-12 z-30 max-w-[60%]"
            icon={<IconCircleDashedCheck className="size-4 text-neutral-500 dark:text-neutral-400" />}
            title="Ready made solutions"
          />
        </div>
      </Circle>
      <Circle className='shadow border border-neutral-100 dark:border-neutral-800 size-60 bg-neutral-100/80 dark:bg-neutral-900/80 z-[9]'></Circle>
      <Circle className='shadow border border-neutral-100 dark:border-neutral-800 size-80 bg-neutral-100/60 dark:bg-neutral-900/60 z-[8]'></Circle>
      <Circle className='shadow border border-neutral-100 dark:border-neutral-800 size-100 bg-neutral-100/40 dark:bg-neutral-900/40 z-[7]'></Circle>
      <Circle className='shadow border border-neutral-100 dark:border-neutral-800 size-120 bg-neutral-100/20 dark:bg-neutral-900/20 z-[6]'></Circle>
    </div>
  );
};

export const Circle = ({ className, children }) => (
  <div className={cn("size-40 bg-gray-100 dark:bg-neutral-900 rounded-full absolute inset-0 m-auto z-[10]", className)}>
    {children}
  </div>
);

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto bg-neutral-100 dark:bg-neutral-800 mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-sm font-normal text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      {description && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mt-3">
          {description}
        </p>
      )}
    </div>
  );
};