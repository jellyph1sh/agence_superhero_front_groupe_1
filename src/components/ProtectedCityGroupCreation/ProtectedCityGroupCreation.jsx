import axios from "axios";
import { useEffect, useState } from "react";

// STYLES
import "./ProtectedCityGroupCreation.css";

const ProtectedCityGroupCreation = ({ cities, groups }) => {
    const [error, setError] = useState(null);
    const storedToken = localStorage.getItem('accessToken');

    const onHandleSubmit = (e) => {
        setError(null)
        if (storedToken) {
            e.preventDefault();
            axios.post('http://localhost:8000/api/protectedCityGroup', {
                id_group: e.target.group.value,
                id_city: e.target.city.value,
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
        <div className="prot-group-box">
            <h3>Group Protection</h3>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="group">Select Group</label>
                <select name="group" id="group-chief">
                    {
                        groups.map(group => (
                            <option key={group.id_group} value={group.id_group}>{group.group_names}</option>
                        ))
                    }
                </select>
                <label htmlFor="city">Select City to protect</label>
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

export default ProtectedCityGroupCreation;