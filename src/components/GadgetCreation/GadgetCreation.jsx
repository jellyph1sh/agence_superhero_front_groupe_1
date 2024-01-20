import axios from "axios";
import { useState } from "react";

// STYLES
import "./GadgetCreation.css";

const GadgetCreation = () => {
    const [error, setError] = useState(null);
    const storedToken = localStorage.getItem('accessToken');

    const onHandleSubmit = (e) => {
        setError(null)
        if (storedToken) {
            e.preventDefault();
            axios.post('http://localhost:8000/api/gadget', {
                gadget_name: e.target.name.value,
                gadget_description: e.target.description.value,
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
        <div className="gadget-box">
            <h3>Gadget Creation</h3>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="name">Gadget name</label>
                <input type="text" name="name" id="gadget-name" />
                <label htmlFor="description">Gadget description</label>
                <input type="text" name="description" id="gadget-desc" />
                <button type="submit">Create</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

export default GadgetCreation;