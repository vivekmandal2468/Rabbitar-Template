import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./button";
import ModeToggle from "./mode-toggle";
import { Floating_toggle_btn } from "./floating_toggle_btn";

const navLinks = [
  { title: "Features", path: "/features" },
  { title: "Products", path: "/products" },
  { title: "Socials", path: "/socials" },
  { title: "Pricing", path: "/pricing" },
];

export const MenuToggleButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-md p-0 text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
    type="button"
  >
    <IconLayoutSidebar
      className={`absolute inset-0 m-auto size-5 transition-all duration-200 ${
        isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
      }`}
    />

    <IconX
      className={`absolute inset-0 m-auto size-5  transition-all duration-200 ${
        isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0 "
        }`}
        />
  </button>
);

export const Navbar = () => {
  return (
    <header className=" border-b border-neutral-200 px-4 dark:border-neutral-800 lg:px-40">
      <DesktopNavbar />
      <MobileNavbar />

    </header>
  );
};



export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* This div disappears on desktop */}
      <div className="flex justify-between px-4 py-4 md:hidden">
        <Logo />
        <MenuToggleButton isOpen={open} onClick={() => setOpen(!open)} />

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backdropFilter: "blur(15px)",
                background: "transparent",
              }}
              exit={{
                opacity: 0,
                backdropFilter: "blur(0px)",
                background: "rgba(225, 255, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 h-full w-full bg-white/80 px-4 py-4"
            >
              <Container className="relative h-full">
                <div className="flex justify-between">
                  <Logo />
                  <MenuToggleButton isOpen={true} onClick={() => setOpen(false)} />
                </div>

                <div className="my-10 flex flex-col gap-6">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setOpen(false)} 
                        className="text-lg font-semibold text-neutral-600 dark:text-neutral-400"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  className="absolute bottom-6 right-6 flex w-full flex-row justify-end gap-3"
                >
                  <Button className="border border-gray-400 bg-transparent font-medium text-neutral-600 dark:text-neutral-400 ">
                    Login
                  </Button>
                  <Button>Signup</Button>
                </motion.div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Moved OUTSIDE the md:hidden div. It will now survive on desktop screens and still hide when the mobile menu is open. */}
      <Floating_toggle_btn isHidden={open}/>
    </>
  );
};





export const DesktopNavbar = () => {
  return (
    <Container className="hidden items-center justify-between py-4 lg:flex">
      <Logo />


      <div className="flex items-center gap-4">
        {navLinks.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Login
        </Link>
        <Button>Signup</Button>
      </div>
      
    </Container>
  );
};