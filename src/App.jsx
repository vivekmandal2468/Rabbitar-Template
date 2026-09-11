import React from "react";
// import ModeToggle from "./components/mode-toggle";
import { ThemeProvider } from "next-themes";
import { Navbar } from "./components/navbar";
// import { Container } from "./components/container";
import { Hero } from "./components/hero";
import { Logocloud } from "./components/logo-cloud";
import { Features } from "./components/features/index";
import { Speed } from "./components/speed";
import { FeaturesSecondary } from "./components/features-secondary";
import { Outcomes } from "./components/outComes";
import { FeaturesTertiary } from "./components/featutes-tertiary";
import { Pricing } from "./components/ui/pricing";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
// import { Floating_toggle_btn } from "./components/floating_toggle_btn";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen font-display ">
        <Navbar />
        <Hero/>
        <Logocloud/>
        <Features/>
        <Speed/>
        <FeaturesSecondary/>
        <Outcomes/>
        <FeaturesTertiary/>
        <Pricing/>
        <Faq/>
        <Footer/>
        {/* <Floating_toggle_btn/> */}
      </div>
    </ThemeProvider>
  );
}
