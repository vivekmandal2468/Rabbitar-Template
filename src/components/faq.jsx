import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Heading } from "./heading";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { FAQIcon } from "../icons";
import { motion } from "motion/react";
import { Container } from "./container";

export const Faq = () => {
  const questions = [
    {
      question: "What is Rabbitar AI?",
      answer: "Rabbitar is a unified dashboard that helps you monitor usage and spending across top Al providers like OpenAl, Anthropic, Gemini, DeepSeek, and Grok. It gives real-time insights, alerts, and cost breakdowns by model, provider, project, or user-so you always stay in control of your Al budget.",
    },
    {
      question: "Who is Rabbitar AI built for?",
      answer: "Rabbitar AI is a platform for building and managing AI agents.",
    },
    {
      question: "How does Rabbitar AI work?",
      answer: "Rabbitar AI is a platform for building and managing AI agents.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial so you can explore all features before committing to a plan.",
    },
  ];
  return (
    <section className="py-3 md:py-6 lg:py-12 relative overflow-hidden lg:px-24 px-4 pt-8 border-t lg:border-hidden">
      <Container>
        <FAQIcon />
        <Heading className="my-7 md:my-14 px-0">Frequently Asked Questions</Heading>
        
        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 p-3 md:p-6 px-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left outline-none cursor-pointer"
      >
        <p className="text-sm md:text-xl font-bold font-display text-neutral-900 dark:text-neutral-100">
          {question}
        </p>
        <div className="size-6 shrink-0 rounded-full bg-black dark:bg-white flex items-center justify-center relative">
          <IconPlus
            className={cn(
              "size-4 text-white dark:text-black absolute inset-0 m-auto transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
          />
          <IconMinus
            className={cn(
              "size-4 text-white dark:text-black absolute inset-0 m-auto scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="text-left mt-4 text-neutral-600 dark:text-neutral-400">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};