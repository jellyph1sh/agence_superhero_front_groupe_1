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
        <div className="home-filter">
          <div className="filter-button" onClick={() => {console.log("filter!")}}>
            <img src="/src/assets/images/filter.svg" alt="filter icon" className="filter-img"/>
            <h3 className="filter-title">Filter</h3>
          </div>
        </div>
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
