// STYLES
import { useState } from "react";
import "./HeroCard.css";

const HeroCard = () => {
    const [isDetails, setDetails] = useState(false);



    return (
        <>
            {
                isDetails ?
                <div className="herocard herocard-min">
                    <div className="herocard-header">
                        <img src="src/assets/images/fake_superman.jpg" alt="Fake superman" className="herocard-img-min" />
                        <div className="herocard-titles">
                            <h3 className="herocard-title-details">Superman</h3>
                            <h4 className="herocard-subtitle">Clark Kent</h4>
                        </div>
                    </div>
                    <div className="herocard-body">
                        <div className="herocard-desc">
                            <h5 className="herocard-title-info">Description:</h5>
                            <p className="herocard-desc-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sit velit eligendi ad perspiciatis, non pariatur tempore quia nihil sunt ipsam optio sed vero, porro quas explicabo provident iusto eum.</p>
                        </div>
                        <div className="herocard-information">
                            <h5 className="herocard-title-info">Hair:</h5>
                            <p className="herocard-text-info">black, fried</p>
                        </div>
                        <div className="herocard-information">
                            <h5 className="herocard-title-info">Origin:</h5>
                            <p className="herocard-text-info">Krypton</p>
                        </div>
                        <div className="herocard-information">
                            <h5 className="herocard-title-info">SideKick:</h5>
                            <p className="herocard-text-info">None</p>
                        </div>
                        <div className="herocard-information">
                            <h5 className="herocard-title-info">Group:</h5>
                            <p className="herocard-text-info">None</p>
                        </div>
                    </div>
                    <button className="herocard-details" onClick={() => {setDetails(false)}}>Hide details</button>
                </div>
                :
                <div className="herocard">
                    <img src="src/assets/images/fake_superman.jpg" alt="Fake superman" className="herocard-img" />
                    <h3 className="herocard-title">Superman</h3>
                    <button className="herocard-details" onClick={() => {setDetails(true)}}>More details</button>
                </div>
            }
        </>
    );
}

export default HeroCard;