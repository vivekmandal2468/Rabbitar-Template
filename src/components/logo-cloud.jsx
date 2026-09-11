import React from "react";
import { motion } from "motion/react";

import characterai from "../assets/characterai.png";
import openai from "../assets/openai.webp";
import helloPatient from "../assets/hello-patient.webp";
import granola from "../assets/granola.webp";
import oracle from "../assets/oracle.webp";
import portola from "../assets/portola.webp";

export const Logocloud = () => {
  const logos = [
    { title: "Open AI", src: openai },
    { title: "Hello Patient", src: helloPatient },
    { title: "Granola", src: granola },
    { title: "Character AI", src: characterai },
    { title: "Oracle", src: oracle },
    { title: "Portola", src: portola },
  ];

  return (
    <section className="lg:py-10 px-2">
      <h2 className="text-neutral-600 font-medium dark:text-neutral-300 text-lg text-center max-w-xl mx-auto mt-20 sm:text-sm sm:font-normal">
        Trusted by modern operators across industries. <br />
        <span className="text-neutral-500 dark:text-neutral-400">
          From pilot to scale without chaos.
        </span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto mt-10">

        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ y: -10, opacity: 0, filter: "blur(10px)" }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <img
              src={logo.src}
              alt={logo.title}
              width={100}
              height={100}
              className="size-25  object-contain mx-auto dark:invert "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};