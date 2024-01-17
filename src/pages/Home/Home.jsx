// COMPONENTS
import Header from "../../components/Header/Header";
import HeroCard from "../../components/HeroCard/HeroCard";

// STYLES
import "./Home.css";
const Home = () => {

  return (
    <>
      <Header/>
      <div className="home-body">
        <div className="home-cards">
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </div>
      </div>
    </>
  );
};

export default Home;
