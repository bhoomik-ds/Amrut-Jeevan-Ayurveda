import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import VineDivider from "../components/VineDivider/VineDivider";
import Features from "../components/Features/Features";
import Process from "../components/Process/Process";
import Order from "../components/Order/Order";
import Expert from "../components/Expert/Expert";
import Reviews from "../components/Reviews/Reviews";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />

      <VineDivider />

      <Features />

      <Process />

      <Order />

      <Expert />

      <VineDivider />

      <Reviews />

      <Feedback />

      <Footer />
    </>
  );
}

export default Home;