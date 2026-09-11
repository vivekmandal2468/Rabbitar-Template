import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subHeading";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { LandingImages } from "./landingImages";

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-26 overflow-x-hidden">
      <Container>
        <Heading as="h1" className="lg:px-37 ">
          Agents that do the work <br /> Approvals that keep you safe.
        </Heading>

        <SubHeading className="lg:px-37 lg:py-4">
          Deploy AI agents that plan, act through your tools, and report
          outcomes-without changing how your team works.
        </SubHeading>

        <div className="flex items-center gap-4 lg:gap-6 px-4 lg:px-37">
          <Button className="shadow-brand">Start your free trial</Button>
          <Button asChild variant="outline">
            <Link to="#">View role based demos</Link>
          </Button>
        </div>
      </Container>
      <div>
      <LandingImages className=' '/>
      
      </div>
    </section>
  );
};
