import React from "react";
import { Container } from "../container";
import { Heading } from "../heading";
import { PersonStanding } from "lucide-react";
import { Button } from "../button";
import { IconCircleCheckFilled, IconLockFilled, IconUserFilled } from "@tabler/icons-react";

export const Pricing = () => {
  return (
    <section className="py-15 md:py-30 lg:py-42 relative overflow-hidden lg:px-24  px-4">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        <div className="flex flex-col gap-4 ">
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm font-medium">
            Trusted by 500+ enterprice company.
          </p>
          <Heading className='px-0 text-3xl'>
            Affordable pricing. <br /> Easy Scaling.
          </Heading>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm font-medium max-w-xl" >
            Start small to explore Automation, add agents as you scale, and
            unlock enterprice grade guardrails, orchestration, and reporting
            when you are ready.
          </p>

          <ul className="list-none *:flex *:items-center *:gap-2 flex flex-col mt-4 gap-2 *:font-bold *:text-xs dark:text-neutral-300">
            <li>
              <IconLockFilled className="size-3.5"/>
              <p>Built-In-Guardrails</p>
            </li>
            <li>
              <IconUserFilled className="size-3.5"/>
              <p>Agent Orchestration</p>
            </li>
            <li>
              <PersonStanding className="size-4"/>
              <p>human-in-the-Loop</p>
            </li>
          </ul>
        </div>

        <div className="gap-4  flex flex-col">
          <div className="p-2 md:p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border border-neutral-300 dark:border-neutral-800 shadow-inner shadow-neutral-400/45 dark:shadow-blue-400/60" >
            <div>
              <Heading className='p-0 text-5xl'>
                $10
                <span className="text-neutral-400  dark:text-neutral-500 text-2xl md:text-xl lg:text-3xl">
                  /mo
                </span>
              </Heading>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm font-medium max-w-xl">
                 Perfect for individuals or small teams exploring automation.
              </p>
              <Button className="mt-4">Start now</Button>
            </div>

            <div>
              <ul className="list-none *:flex *:items-center *:gap-2 flex flex-col mt-3 gap-2  *:font-bold *:text-xs dark:text-neutral-300">
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>1 Ai agent included</p>
                </li>
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>Standard Integration</p>
                </li>
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>Basic Approval Flows</p>
                </li>
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>7 Days Activity logs</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 md:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900 grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-inner shadow-neutral-500/45 dark:shadow-blue-400/60">
            <div>
              <Heading className='p-0 text-5xl'>
                $60
                <span className="text-neutral-400 text-2xl dark:text-neutral-500 md:text-xl lg:text-3xl">
                  /mo
                </span>
              </Heading>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm font-medium max-w-xl">
                 Ideal for growing teams redy to scale automation safely.
              </p>
              <Button className="mt-4">Start now</Button>
            </div>

            <div>
              <ul className="list-none *:flex *:items-center *:gap-2 flex flex-col mt-1 gap-2 *:font-bold *:text-xs dark:text-neutral-300">
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>upto 5 Ai agents</p>
                </li>
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>Mult-Agent orcchestration</p>
                </li>
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>Advanced Approval Routing</p>
                </li>
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>30-days Audit Trials</p>
                </li>
                <li>
                  <IconCircleCheckFilled className="size-4 text-neutral-500 dark:text-neutral-400" />
                  <p>ROI insights</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};