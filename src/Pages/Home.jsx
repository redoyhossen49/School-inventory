import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Works from "../components/Works";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen  ">
        <Hero></Hero>
      </div>
      <Features></Features>
      <Works></Works>
      <Benefits></Benefits>
      <Testimonials></Testimonials>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}
