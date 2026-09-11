import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./button";
import { cn } from "../lib/utils";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMoon,
  IconSend,
  IconSun,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const productItems = [
    {
      title: "Agent Simulator",
      href: "#",
    },
    {
      title: "AI Workflows",
      href: "#",
    },
    {
      title: "Agent Builder",
      href: "#",
    },
    {
      title: "Analytics Dashboard",
      href: "#",
    },
    {
      title: "API Integration",
      href: "#",
    },
    {
      title: "Enterprise Soluion",
      href: "#",
    },
  ];

  const companyItems = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Press",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];

  return (
    <section
      className={cn("py-10 md:py-2 lg:pt-32 px-4 overflow-hidden lg:px-24")}
    >
      <footer
        className={cn(
          " pt-10 md:pt-20 lg:pt-32 lg:pb-10 relative perspective-distant ",
        )}
      >
        <span className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-4/5 mx-auto"></span>

        <Container className="grid grid-cols-1 md:grid-cols-5 gap-10 px-4 relative z-20">
          <div className="col-span-2 flex flex-col gap-2 items-start ">
            <Logo className="font-bold font-display " />
            <p className="py-1 text-sm pb-1.5 text-neutral-800 dark:text-neutral-300">
              Safe, observable, outcome-driven AI
            </p>
            <Button className="shadow-brand">Start a 30-day trial</Button>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-neutral-400 dark:text-neutral-500 text-sm">Products</h4>
            <ul className="list-none flex flex-col gap-2 ">
              {productItems.map((item, index) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition duration-200 text-sm "
                  >
                    {" "}
                    {item.title}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-neutral-400 dark:text-neutral-500 text-sm">Company</h4>
            <ul className="list-none flex flex-col gap-2 ">
              {companyItems.map((item, index) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition duration-200 text-sm "
                  >
                    {" "}
                    {item.title}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
              Newsletter
            </div>
            <div className="border p-px border-neutral-200 bg-neutral-100 rounded-md dark:border-neutral-800 dark:bg-neutral-700 relative items-center  flex shrink-0 flex-nowrap ">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent pl-2 py-2 placeholder-neutral-400 dark:placeholder-neutral-500 text-neutral-600 dark:text-neutral-200 text-sm outline-none"
              />
              <button className="bg-black text-white dark:bg-white dark:text-black absolute inset-y-0 text-center px-4 py-2 rounded-sm right-0">
                <IconSend className="size-4" />
              </button>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 font-inter text-sm max-w-xl">
              Get the latest product news and behind the scenes updates.
            </p>
          </div>
        </Container>

        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between mt-10 relative z-20 px-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Rabbitar AI. All rights reserved.
          </p>

          <div className="flex flex-col items-start sm:items-end gap-4 *:text-sm *:text-neutral-500 dark:*:text-neutral-400 hover:*:text-black dark:hover:*:text-white">
            <div className="flex items-center gap-4">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link to={"https://www.instagram.com/vivek_mandal2486/"}>
                <IconBrandInstagram className="text-black dark:text-neutral-50 size-5 cursor-pointer" />
              </Link>
              <Link to={"https://x.com/PrimeDev_2468"}>
                <IconBrandTwitter className="text-black dark:text-neutral-50 size-5 cursor-pointer" />
              </Link>

              <IconBrandLinkedin className="text-black dark:text-neutral-50 size-5 cursor-pointer" />
            </div>
          </div>
        </Container>

        <div
          className={cn(
            "absolute -inset-x-[150%] -inset-y-40 ",
            "flex items-center justify-center gap-20",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "mask-radial-from-50%",
          )}
          style={{
            transform: "rotateX(60deg)",
          }}
        />
        
      </footer>
    </section>
  );
};