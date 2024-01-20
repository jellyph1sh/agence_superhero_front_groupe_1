import axios from "axios";
import { useState } from "react";

// STYLES
import "./VehicleCreation.css";

const VehicleCreation = () => {
    const [error, setError] = useState(null);
    const storedToken = localStorage.getItem('accessToken');

    const onHandleSubmit = (e) => {
        setError(null)
        if (storedToken) {
            e.preventDefault();
            axios.post('http://localhost:8000/api/vehicule', {
                vehicule_name: e.target.name.value,
                vehicule_description: e.target.description.value,
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
        <div className="vehicle-box">
            <h3>Vehicle Creation</h3>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="name">Vehicle name</label>
                <input type="text" name="name" id="vehicle-name" />
                <label htmlFor="description">Vehicle description</label>
                <input type="text" name="description" id="vehicle-desc" />
                <button type="submit">Create</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

export default VehicleCreation;