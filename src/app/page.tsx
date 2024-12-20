import { type NextPage } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonial />
      </main>
    </>
  );
};

export default Home;
