import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subHeading";
import { LandingImages } from "./landingImages";

export const Speed = () => {
  return (
    <section className=" pt-10 md:pt-20 lg:pt-26 overflow-x-hidden " >
    <Container>
      <Heading className="lg:px-37 ">
        Built for Speed <br /> Designed for Scale.
      </Heading>

      <SubHeading className="lg:px-37 lg:py-4">
        Deploy AI agents that plan, act through your tools, and report
        outcomes-without changing how your team works.
      </SubHeading>

      <LandingImages className=''/>
    </Container>
    </section>
  );
};
