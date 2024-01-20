import axios from "axios";
import { useEffect, useState } from "react";

// STYLES
import "./GroupCreation.css";

const GroupCreation = ({ cities, heroes }) => {
    const [error, setError] = useState(null);
    const storedToken = localStorage.getItem('accessToken');

    const onHandleSubmit = (e) => {
        setError(null)
        if (storedToken) {
            e.preventDefault();
            axios.post('http://localhost:8000/api/groups', {
                group_names: e.target.name.value,
                id_chief: e.target.chief.value,
                hq_city: e.target.city.value,
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

    return (
        <div className="group-box">
            <h3>Groups Creation</h3>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="name">Group name</label>
                <input type="text" name="name" id="group-name" />
                <label htmlFor="chief">Select Chief</label>
                <select name="chief" id="group-chief">
                    {
                        heroes.map(hero => (
                            <option key={hero.id_hero} value={hero.id_hero}>{hero.firstname} {hero.lastname}</option>
                        ))
                    }
                </select>
                <label htmlFor="city">Select HQ City</label>
                <select name="city" id="group-city">
                    {
                        cities.map(city => (
                            <option key={city.id_city} value={city.id_city}>{city.city_name}</option>
                        ))
                    }
                </select>
                <button type="submit">Create</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

export default GroupCreation;