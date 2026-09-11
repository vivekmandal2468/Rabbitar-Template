import React from "react";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { MergeIcon, PersonStanding, WorkflowIcon } from "lucide-react";
// import { motion } from 'motion-react';

export const FeaturesSecondary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2  border-y border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800 divide-x ">
          <div>
          <div className=" p-8">
            <h2 className=" font-bold text-neutral-800 dark:text-neutral-200 text-2xl md:text-lg">
              Agent Studio
            </h2>

            <CardDiscription>
              <h2 className="text-neutral-600 mt-2 dark:text-neutral-400 ">
                Design, launch and customize AI agents for marketing, sales,
                support and ops, built around your workflows.
              </h2>
            </CardDiscription>
            </div>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          
          </div>

          <div className="flex flex-col h-full justify-between pt-5">
          <div className=" p-8 ">
            <h2 className="text-2xl md:text-lg font-bold text-neutral-800 dark:text-neutral-200 ">
              Multi-Agent Orchestration
            </h2>
            <CardDiscription>
              <h2 className="text-neutral-600 mt-2 dark:text-neutral-400 text-balance">
                Coordinate multiple agents across workflows using memory,
                interrupts, and conditional logic.
              </h2>
            </CardDiscription>
              </div>

            <CardSkeleton className="mask-radial-from-50% mask-t-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10 md:mt-20 lg:px-37 px-3 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <WorkflowIcon className="size-5"/>
              <h3 className="font-bold text-lg text-neutral-600">
                Workflow Automation
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
              Automate campaigns, tickets and CRM updates without manual
              handoffs.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MergeIcon className="size-5"/>
              <h3 className="font-bold text-lg text-neutral-600">
                Integration Fabric.
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
              Connect CRMs, service desks, data warehouses and cloud apps seamlessly.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <PersonStanding className="size-6" />
              <h3 className="font-bold text-lg text-neutral-600">
                Human-in-the-Loop
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
             Add reviews, approvals and escalations without slowing work.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const CardSkeleton = ({ className, children }) => {
  return (
    <div
      className={cn(
         "h-80 sm:h-60 flex flex-col md:h-80 relative overflow-hidden perspective-distant",
        className,
        
      )}
    >
      {children}
    </div>
  );
};

export const CardDiscription = ({ children }) => {
  return <h2 className="text-neutral-600 mt-2 max-w-sm  ">{children}</h2>;
};
