import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Works from "../components/Works";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div id="home">
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <Works></Works>
      <Benefits></Benefits>
      <Testimonials></Testimonials>
      <CTA></CTA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
