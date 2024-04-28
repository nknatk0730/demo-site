import { Metadata } from "next";
import { Hero, Contact, Features } from "./components";

export const metadata: Metadata = {
  title: 'About Service',
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Features />
      <Contact />
    </div>
  ) 
};