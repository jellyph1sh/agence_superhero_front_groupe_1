// STYLES
import "./HeroCard.css";

const HeroCard = () => {
    return (
        <div className="herocard">
            <img src="src/assets/images/fake_superman.jpg" alt="Fake superman" />
            <h3 className="herocard-title">Superman</h3>
            <button className="herocard-details">More details</button>
        </div>
    );
}

export default HeroCard;