import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  FileIcon,
  SalesforceIcon,
  HubspotIcon,
  GoogleSheetsIcon,
  SettingsIcon,
  HumanIcon,
} from "../../../components/../icons/index";
import { motion, useInView } from "motion/react";

export const SkeletonOne = () => {
  const items = [
    {
      icon: <FileIcon className="size-4" />,
      variant: "blue",
      title: "Connect Data",
      description:
        "Link CRMs, helpdesks, and APIs to give agents secure, role-based access.",
      tags: [
        { icon: <SalesforceIcon className="size-3" />, text: "Salesforce" },
        { icon: <HubspotIcon className="size-3" />, text: "Hubspot" },
        { icon: <GoogleSheetsIcon className="size-3" />, text: "Sheets" },
      ],
    },
    {
      icon: <HumanIcon className="size-4" />,
      variant: "red",
      title: "Human-in-the-Loop",
      description:
        "Add reviews, approvals and escalations without slowing work.",
      tags: [
        { icon: <SalesforceIcon className="size-3" />, text: "Salesforce" },
        { icon: <HubspotIcon className="size-3" />, text: "Hubspot" },
        { icon: <GoogleSheetsIcon className="size-3" />, text: "Sheets" },
      ],
    },
    {
      icon: <SettingsIcon className="size-4" />,
      variant: "green",
      title: "Define Processing Logic",
      description:
        "Create workflows, decision points, and conditional actions for each task.",
      tags: [
        { icon: <SalesforceIcon className="size-3" />, text: "Salesforce" },
        { icon: <HubspotIcon className="size-3" />, text: "Hubspot" },
        { icon: <GoogleSheetsIcon className="size-3" />, text: "Sheets" },
      ],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  const [actiavteCards, setActivateCards] = useState(null);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActivateCards((prev) => {
        if (!prev) {
          return [items[0]];
        } else if (prev.length >= items.length) {
          clearInterval(interval);
          return prev;
        }
        return [items[prev.length], ...prev];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex-1 rounded-t-3xl max-w-sm mx-auto absolute inset-x-0 p-2 bg-neutral-100 dark:bg-neutral-900 h-full",
      )}
    >
      {actiavteCards &&
        actiavteCards.map((item, idx) => (
          <Card
            key={item.title}
            variant={item.variant}
            icon={item.icon}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
    </div>
  );
};

const Card = ({ variant, icon, title, description, tags = [] }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 300,
          damping: 25,
        },
        opacity: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
      }}
      className="px-4 py-2 rounded-[16px] shadow-black/10 border border-transparent mb-2 ring-1 ring-black/10 dark:ring-white/10 bg-white items-start flex flex-col dark:bg-neutral-800"
    >
      <div
        className={cn(
          "size-7  rounded-full text-white shrink-0  flex items-center justify-center mt-1 ",
          variant === "blue" && "bg-blue-500",
          variant === "red" && "bg-red-500",
          variant === "green" && "bg-green-500",
        )}
      >
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200">{title}</p>
        <p className="text-base text-neutral-600 dark:text-neutral-400">{description}</p>
        <div className="mt-2 flex flex-row flex-wrap gap-2 justify-center ">
          {tags.map((tag) => (
            <Tag key={tag.text} text={tag.text} icon={tag.icon} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ text, icon }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-1 py-0.5 border border-neutral-200 dark:border-neutral-700 text-sm rounded-sm">
      {icon}
      <p className="text-xs text-neutral-500 dark:text-neutral-400">{text}</p>
    </div>
  );
};