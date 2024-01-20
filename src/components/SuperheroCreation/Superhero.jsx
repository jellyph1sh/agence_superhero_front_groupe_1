import axios from "axios";
import { useEffect, useState } from "react";

// STYLES
import "./Superhero.css";

const Superhero = ({ cities }) => {
    const [error, setError] = useState(null);
    const [gadgets, SetGadgets] = useState([]);
    const [powers, setPowers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [checkPowers, setPowersList] = useState([]);
    const [checkGadgets, setGadgetsList] = useState([]);
    const storedToken = localStorage.getItem('accessToken');

    const onHandleCheckedGadget = (e) => {
        var updatedList = [...checkGadgets];
        if (e.target.checked) {
            updatedList = [...checkGadgets, e.target.value];
        } else {
            updatedList.splice(checkGadgets.indexOf(e.target.value), 1);
        }
        setGadgetsList(updatedList);
    }

    const onHandleCheckedPower = (e) => {
        var updatedList = [...checkPowers];
        if (e.target.checked) {
            updatedList = [...checkPowers, e.target.value];
        } else {
            updatedList.splice(checkPowers.indexOf(e.target.value), 1);
        }
        setPowersList(updatedList);
    }

    /*
        lastname: e.target.lastname.value,
                firstname: e.target.firstname.value,
                alias: e.target.alias.value,
                sex: e.target.sex.value,
                hair_color: e.target.hair.value,
                description: e.target.description,
                wiki_url: e.target.wiki.value,
                origin_planet: e.target.planet.value,
                city: e.target.city.value,
                id_gadget: checkGadgets,
                id_power: checkPowers,
                id_vehicule: e.target.vehicle.value,
    */

    const onHandleSubmit = (e) => {
        setError(null)
        if (storedToken) {
            e.preventDefault();
            axios.post('http://localhost:8000/api/superHero', {
                firstname: e.target.firstname.value,
                lastname: e.target.lastname.value,
                alias: e.target.alias.value,
                sex: e.target.sex.value,
                hair_color: e.target.hair.value,
                description: e.target.desc.value,
                wiki_url: e.target.wiki.value,
                origin_planet: e.target.planet.value,
                city: e.target.city.value,
                id_gadget: 1,
                id_power: 1,
                id_vehicule: e.target.vehicle.value,
            }, {
                headers: {
                    'Authorization': `Bearer ${storedToken}`,
                },
            })
            .then(function (response) {
                setError(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        if (storedToken) {
            axios.get('http://localhost:8000/api/gadget', {
              headers: {
                'Authorization': `Bearer ${storedToken}`,
              },
            })
              .then(response => {
                SetGadgets(response.data);
              })
              .catch(error => {
                console.error('Erreur lors de la requête GET', error);
              });

            axios.get('http://localhost:8000/api/powers', {
            headers: {
                'Authorization': `Bearer ${storedToken}`,
            },
            })
            .then(response => {
                setPowers(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la requête GET', error);
            });

            axios.get('http://localhost:8000/api/vehicule', {
            headers: {
                'Authorization': `Bearer ${storedToken}`,
            },
            })
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la requête GET', error);
            });
          }
    }, [])

    return (
        <div className="superhero-box">
            <h3>Superhero Creation</h3>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" id="superhero-firstname" />
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="superhero-lastname" />
                <label htmlFor="alias">Alias</label>
                <input type="text" name="alias" id="superhero-alias" />
                <label htmlFor="desc">Description</label>
                <input type="text" name="desc" id="superhero-description" />
                <label htmlFor="sex">Sex</label>
                <select name="sex" id="superhero-sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label htmlFor="hair">Hair Color</label>
                <input type="text" name="hair" id="superhero-hair" />
                <label htmlFor="wiki">Wiki URL</label>
                <input type="text" name="wiki" id="superhero-wiki" />
                <label htmlFor="planet">Planet</label>
                <input type="text" name="planet" id="superhero-planet" />
                <label htmlFor="city">Select Protect City</label>
                <select name="city" id="superhero-city">
                    {
                        cities.map(city => (
                            <option key={city.id_city} value={city.id_city}>{city.city_name}</option>
                        ))
                    }
                </select>
                <div className="superhero-gadgets-list">
                    {
                        gadgets.map(gadget => (
                            <div key={gadget.id_gadget}>
                                <input value={gadget.id_gadget} type="checkbox" onChange={onHandleCheckedGadget} />
                                <span>{gadget.gadget_name}</span>
                            </div>
                        ))
                    }
                </div>
                <label htmlFor="vehicle">Select Power</label>
                <div className="superhero-powers-list">
                    {
                        powers.map(power => (
                            <div key={power.id_power}>
                                <input value={power.id_power} type="checkbox" onChange={onHandleCheckedPower} />
                                <span>{power.power_name}</span>
                            </div>
                        ))
                    }
                </div>
                <label htmlFor="vehicle">Select Vehicle</label>
                <select name="vehicle" id="superhero-vehicle">
                    {
                        vehicles.map(vehicle => (
                            <option key={vehicle.id_vehicule} value={vehicle.id_vehicule}>{vehicle.vehicule_name}</option>
                        ))
                    }
                </select>
                <button type="submit">Create</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

export default Superhero;