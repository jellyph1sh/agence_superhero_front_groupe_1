import axios from "axios";
import { useEffect, useState } from "react";

// COMPONENTS
import CityCreation from "../../components/CityCreation/CityCreation";
import GadgetCreation from "../../components/GadgetCreation/GadgetCreation";
import GroupCreation from "../../components/GroupCreation/GroupCreation";
import Header from "../../components/Header/Header";
import PowerCreation from "../../components/PowerCreation/PowerCreation";
import ProtectedCityGroupCreation from "../../components/ProtectedCityGroupCreation/ProtectedCityGroupCreation";
import Superhero from "../../components/SuperheroCreation/Superhero";
import VehicleCreation from "../../components/VehicleCreation/VehicleCreation";

// STYLES
import "./Create.css";

const Create = () => {
    const storedToken = localStorage.getItem('accessToken');
    const [groups, SetGroups] = useState([]);
    const [cities, SetCities] = useState([]);
    const [heroes, SetHeroes] = useState([]);

    useEffect(() => {
        if (storedToken) {
            axios.get('http://localhost:8000/api/groups', {
              headers: {
                'Authorization': `Bearer ${storedToken}`,
              },
            })
              .then(response => {
                SetGroups(response.data);
              })
              .catch(error => {
                console.error('Erreur lors de la requête GET', error);
              });

            axios.get('http://localhost:8000/api/city', {
              headers: {
                'Authorization': `Bearer ${storedToken}`,
              },
            })
              .then(response => {
                SetCities(response.data);
              })
              .catch(error => {
                console.error('Erreur lors de la requête GET', error);
              });
            
            axios.get('http://localhost:8000/api/superHero', {
              headers: {
                'Authorization': `Bearer ${storedToken}`,
              },
            })
            .then(response => {
            SetHeroes(response.data);
            })
            .catch(error => {
            console.error('Erreur lors de la requête GET', error);
            });
          }
    }, [])

    return (
        <>
            <Header/>
            <div className="body-creation">
                <h1>Create all you need!</h1>
                <div className="creation-box">
                    <CityCreation/>
                    <GadgetCreation/>
                    <PowerCreation/>
                    <VehicleCreation/>
                    <GroupCreation cities={cities} heroes={heroes}/>
                    <ProtectedCityGroupCreation cities={cities} groups={groups}/>
                    <Superhero cities={cities}/>
                </div>
            </div>
        </>
    );
}

export default Create;