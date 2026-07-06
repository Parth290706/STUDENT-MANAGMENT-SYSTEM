import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import News from "../components/News/News";
import Dashboard from "../components/Dashboard/Dashboard";
import Stats from "../components/Stats/Stats";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <News />
      <Dashboard />
      <Stats />
    </>
  );
};

export default Home;