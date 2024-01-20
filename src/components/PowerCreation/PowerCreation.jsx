import axios from "axios";
import { useState } from "react";

// STYLES
import "./PowerCreation.css";

const PowerCreation = () => {
    const [error, setError] = useState(null);
    const storedToken = localStorage.getItem('accessToken');

    const onHandleSubmit = (e) => {
        setError(null)
        if (storedToken) {
            e.preventDefault();
            axios.post('http://localhost:8000/api/powers', {
                power_name: e.target.name.value,
                power_description: e.target.description.value,
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
        <div className="power-box">
            <h3>Power Creation</h3>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="name">Power name</label>
                <input type="text" name="name" id="power-name" />
                <label htmlFor="description">Power description</label>
                <input type="text" name="description" id="power-desc" />
                <button type="submit">Create</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

export default PowerCreation;