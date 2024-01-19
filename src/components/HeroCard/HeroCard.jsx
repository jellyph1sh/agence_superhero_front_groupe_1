// STYLES
import { useState } from "react";
import PropTypes from 'prop-types';

import "./HeroCard.css";

const HeroCard = ({  firstname, lastname, description,hairColor,origin,groups }) => {
  const [isDetails, setDetails] = useState(false);

  return (
    <>
      {
        isDetails ?
          <div className="herocard herocard-min">
            <div className="herocard-header">
              <img src="src/assets/images/fake_superman.jpg" alt="Fake superman" className="herocard-img-min" />
              <div className="herocard-titles">
                <h3 className="herocard-title-details">{firstname} {lastname}</h3>
                <h4 className="herocard-subtitle">{description}</h4>
              </div>
            </div>
            <div className="herocard-body">
              <div className="herocard-desc">
                <h5 className="herocard-title-info">Description:</h5>
                <p className="herocard-desc-info">{description}</p>
              </div>
           <div className="herocard-information">
                <h5 className="herocard-title-info">Hair:</h5>
                <p className="herocard-text-info">{hairColor}</p>
              </div>
              <div className="herocard-information">
                <h5 className="herocard-title-info">Origin:</h5>
                <p className="herocard-text-info">{origin}</p>
              </div>
              <div className="herocard-information">
                <h5 className="herocard-title-info">Group:</h5>
                <p className="herocard-text-info">{groups}</p>
              </div>
            </div>
            <button className="herocard-details" onClick={() => { setDetails(false) }}>Hide details</button>
          </div>
          :
          <div className="herocard">
            <img src="src/assets/images/fake_superman.jpg" alt="Fake superman" className="herocard-img" />
                      <h3 className="herocard-title">{ firstname}</h3>
            <button className="herocard-details" onClick={() => { setDetails(true) }}>More details</button>
          </div>
      }
    </>
  );
}
HeroCard.propTypes = {
  id_hero: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hairColor: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
  groups: PropTypes.string.isRequired
};

export default HeroCard;
