import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subHeading";
import { LandingImages } from "./landingImages";

export const Outcomes = () => {
  return (
    <section className="pt-14 overflow-y-clip  md:pt-20 lg:pt-26 overflow-x-hidden border-t lg:border-hidden">
      <Container>
        <Heading className="lg:px-37 ">
          Governed AI, <br /> Trusted Outcomes
        </Heading>

        <SubHeading className="lg:px-37 lg:py-4">
          Deploy AI agents with built-in approvals, brand guardrails, and audit
          trails. Every step is visible, reviewable, and compliant.
        </SubHeading>

        <LandingImages />
      </Container>
    </section>
  );
};
