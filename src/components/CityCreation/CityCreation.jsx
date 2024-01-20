import axios from "axios";

import "./CityCreation.css";
import { useState } from "react";

const CityCreation = () => {
    const [error, setError] = useState(null);
    const storedToken = localStorage.getItem('accessToken');

    const onHandleSubmit = (e) => {
        setError(null)
        if (storedToken) {
            e.preventDefault();
            axios.post('http://localhost:8000/api/city', {
                city_name: e.target.name.value,
                latitude: e.target.longitude.value,
                longitude: e.target.latitude.value,
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
        <div className="city-box">
            <h3>City Creation</h3>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="name">City name</label>
                <input type="text" name="name" id="city-name" />
                <label htmlFor="longitude">Longitude</label>
                <input type="number" name="longitude" id="city-longitude" />
                <label htmlFor="latitude">Latitude</label>
                <input type="number" name="latitude" id="city-latitude" />
                <button type="submit">Create</button>
                <p>{ error }</p>
            </form>
        </div>
    );
}

export default CityCreation;