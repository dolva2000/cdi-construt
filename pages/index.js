import Head from "next/head";
import Homepage from "../components/Homepage";
import About from "../components/About";
import Services from "../components/Services";
import Projets from "../components/Projets";
import Testimonials from "../components/Testimonials";
import Price from "../Components/Price";
import Contact from "../Components/Contact";
export default function Home() {
  return (
    <>
      <Head />
      <Homepage />
      <About />
      <Services />
      <Projets />
      <Testimonials />
      <Price />
      <Contact />
    </>
  );
}
