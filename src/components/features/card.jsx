import React from "react";
import { cn } from "../../lib/utils";

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn("bg-neutral-100 dark:bg-neutral-800 rounded-lg w-[calc(100%+0.1cm)] mx-auto scale-95 max-w-lg", className)}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className, children }) => {
  return <div className={cn("px-4 pb-6", className)}>{children}</div>;
};

export const CardTitle = ({ className, children }) => {
  return (
    <h3 className={cn("text-lg md:text-2xl font-bold font-display m-1 px-2 ", className)}>
      {children}
    </h3>
  );
};

export const CardCTA = ({ className, children }) => {
  return (
    <button
      className={cn(
        "border items-center flex justify-center border-neutral-200 dark:border-neutral-800 rounded-full shrink-0 size-8 md:size-10 active:scale-[0.98]",
        className,
      )}
    >
      {" "}
      {children}
    </button>
  );
};

export const CardSkeleton = ({ className, children }) => {
  return (
    <div
      className={cn(
        "h-80 sm:h-60 md:h-80 relative overflow-hidden perspective-distant",
        className,
      )}
    >
      {children}
    </div>
  );
};
