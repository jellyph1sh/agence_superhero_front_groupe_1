// COMPONENTS
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import HeroCard from "../../components/HeroCard/HeroCard";
import "./Home.css";

// STYLES
import "./Home.css";

const Home = () => {
  const storedToken = localStorage.getItem('accessToken');
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    if (storedToken) {
      axios.get('http://localhost:8000/api/superHero', {
        headers: {
          'Authorization': `Bearer ${storedToken}`,
        },
      })
        .then(response => {
          console.log("zertythg");
          setApiData(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la requête GET', error);
        });
    } else {
      console.error('Le token n\'est pas disponible. L\'utilisateur n\'est peut-être pas connecté.');
    }
  }, [storedToken]);  


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
             {apiData.map(hero => (
          <HeroCard
                 key={hero.id_hero}
                 firstname={hero.firstname}
                 lastname={hero.lastname}
                 description={hero.description}
                 hairColor={hero.hair_color}
                 groups={hero.group_names}
                 origin={hero.origin_planet}
          />
        ))}
        
        </div>
      </div>

    </>
  );
};

export default Home;
