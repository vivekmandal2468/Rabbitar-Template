import React from "react";
import { Container } from "../container";
import { Heading } from "../heading";
import { SubHeading } from "../subHeading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card";
import { IconPlus } from "@tabler/icons-react";
import {SkeletonOne} from "./skeletons/first"
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";


export const Features = () => {
  return (
    <section className="pt-10 md:pt-20 px-4 lg:pt-22 lg:px-24 border border-t lg:border-hidden">
      <Container className="py-10 md:py-20 lg:py-10 ">
        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-end lg:justify-between items-baseline-last">
          <Heading className="text-center lg:text-left">
            Built for Fast Moving Teams That Need Control.
          </Heading>
          <SubHeading className="text-center lg:text-left mx-auto lg:mx-0 max-w-2xl lg:text-sm  litems-end py-0 ">
            Agents work inside your existing tools, with built-in approvals,
            brand and policy guardrails, and full traceability. Every action is
            auditable, every outcome accountable.
          </SubHeading>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-10 md:mt-14 md:grid-cols-2 lg:grid-cols-3 ">
            <Card className="rounded-3xl">
              <CardSkeleton>
                <SkeletonOne />
              </CardSkeleton>
              <CardContent className="flex items-start justify-between gap-3 md:items-center">
                <CardTitle className="text-base sm:text-lg md:text-xl">
                  Prebuilt Agents, Tuned to Your Workflows
                </CardTitle>
                <CardCTA>
                  <IconPlus />
                </CardCTA>
              </CardContent>
            </Card>
            <Card>
              <CardSkeleton>
                <SkeletonTwo />
              </CardSkeleton>
              <CardContent className="flex items-start justify-between gap-3 md:items-center">
                <CardTitle className="text-base sm:text-lg md:text-xl">
                  Automate Handoffs, Reduce Ops Friction
                </CardTitle>
                <CardCTA>
                  <IconPlus />
                </CardCTA>
              </CardContent>
            </Card>
            <Card className="rounded-3xl md:col-span-2 lg:col-span-1">
              <CardSkeleton>
                <SkeletonThree />
              </CardSkeleton>
              <CardContent className="flex items-start justify-between gap-3 md:items-center">
                <CardTitle className="text-base sm:text-lg md:text-xl">
                  Approvals, Guardrails, and Full Auditability
                </CardTitle>
                <CardCTA>
                  <IconPlus />
                </CardCTA>
              </CardContent>
            </Card>
        </div>
      </Container>
    </section>
  );
};
