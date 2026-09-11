import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  SalesforceIcon,
  HubspotIcon,
  GoogleSheetsIcon,
} from "../../../components/../icons/index";
import {
  IconClipboardData,
  IconFeatherFilled,
  IconFilter2Search,
  IconPointerUp,
} from "@tabler/icons-react";

export const SkeletonFour = () => {
  const item = [
    {
      title: "Brand & Style",
      icon: <IconClipboardData className="size-4 text-blue-500" />,
      className: "bg-blue-100 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300",
      description:
        "Maintain consistent tone, visuals, and messaging across every customer interaction.",
      tags: [
        { icon: <SalesforceIcon />, text: "Salesforce" },
        { icon: <HubspotIcon />, text: "HubspotIcon" },
        { icon: <GoogleSheetsIcon />, text: "Sheets" },
      ],
    },
    {
      title: "Compliance & Policy",
      icon: <GoogleSheetsIcon className="size-4" />,
      className: "bg-green-100 border border-green-200 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300",
      description:
        "Ensure every response aligns with internal guidelines and meets regulatory standards.",
      tags: [
        { icon: <SalesforceIcon />, text: "Salesforce" },
        { icon: <HubspotIcon />, text: "HubspotIcon" },
        { icon: <GoogleSheetsIcon />, text: "Sheets" },
      ],
    },
    {
      title: "Content Safety Filters",
      icon: <IconFeatherFilled className="size-4 text-blue-500" />,
      className: "bg-blue-100 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300",
      description:
        "Automatically detect and block harmful, sensitive, or restricted content in real time.",
      tags: [
        { icon: <SalesforceIcon />, text: "Salesforce" },
        { icon: <HubspotIcon />, text: "HubspotIcon" },
        { icon: <GoogleSheetsIcon />, text: "Sheets" },
      ],
    },
    {
      title: "Approval Triggers",
      icon: <IconPointerUp className="size-4 text-neutral-500 dark:text-neutral-400" />,
      className: "bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300",
      description:
        "Route outputs to managers or reviewers whenever key rules or thresholds are met.",
      tags: [
        { icon: <SalesforceIcon />, text: "Salesforce" },
        { icon: <HubspotIcon />, text: "HubspotIcon" },
        { icon: <GoogleSheetsIcon />, text: "Sheets" },
      ],
    },
    {
      title: "Output Quality Checks",
      icon: <IconFilter2Search className="size-4 text-indigo-500" />,
      className: "bg-pink-100 border border-pink-200 dark:bg-pink-600/30 dark:border-pink-800 dark:text-pink-300",
      description:
        "Review responses for clarity, accuracy, tone, and completeness before they reach users.",
      tags: [
        { icon: <SalesforceIcon />, text: "Salesforce" },
        { icon: <HubspotIcon />, text: "HubspotIcon" },
        { icon: <GoogleSheetsIcon />, text: "Sheets" },
      ],
    },
  ];

  const [selected, setSelected] = useState(item[0]);
  const intervalRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % item.length;
      setSelected(item[currentIndexRef.current]);
    }, 2000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <div className="flex gap-4 items-center justify-center flex-wrap mb-4 max-w-lg mx-auto">
        {item.map((item, idx) => (
          <button
            onClick={() => setSelected(item)}
            className={cn(
              "px-2 py-1 rounded-sm relative flex items-center justify-center gap-1 cursor-pointer active:scale-98 transition duration-200 opacity-50 text-xs",
              item.className,
              selected.title === item.title && "opacity-100",
            )}
          >
            {selected.title === item.title && (
              <motion.div
                layoutId="selected-item"
                className="absolute inset-0 rounded-[5px] shadow shadow-inner dark:shadow-black/50"
              ></motion.div>
            )}
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "flex-1 rounded-t-3xl max-w-sm mx-auto h-full absolute inset-x-0 p-2 bg-neutral-100 dark:bg-neutral-900",
        )}
      >
        <Card
          variant={selected.variant}
          icon={selected.icon}
          title={selected.title}
          description={selected.description}
          tags={selected.tags}
          className={selected.className}
        />
      </div>
    </div>
  );
};

const Card = ({ variant, icon, title, description, tags, className = [] }) => {
  return (
    <motion.div
      key={title}
      className="p-4 rounded-[16px] shadow-black/10 border border-transparent gap-4 ring-1 ring-black/10 dark:ring-white/10 bg-white flex items-start mb-2 dark:bg-neutral-800 flex-col"
    >
      <div className="flex items-center gap-2">
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "size-6 rounded-full text-white shrink-0 flex items-center justify-center mt-1",
            variant === "blue" && "bg-blue-500",
            variant === "red" && "bg-red-500",
            variant === "green" && "bg-green-500",
            className,
          )}
        >
          {icon}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.1 }}
          className="text-lg font-bold text-neutral-800 dark:text-neutral-200"
        >
          {title}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-base text-neutral-600 dark:text-neutral-400">Tone Guidelines</p>
        <p className="text-sm mt-2 mb-4 text-neutral-600 dark:text-neutral-300 rounded-sm border border-neutral-200 dark:border-neutral-700 px-2 py-1 border-dashed">
          {description}
        </p>

        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <Tag key={tag.text} text={tag.text} icon={tag.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tag = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-2 px-1 py-0.5 border border-neutral-100 dark:border-neutral-700 dark:text-neutral-400 text-sm rounded-sm">
      {icon}
      <p className="text-xs text-neutral-500 dark:text-neutral-400">{text}</p>
    </div>
  );
};