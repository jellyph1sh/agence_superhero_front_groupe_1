// COMPONENTS
import CityCreation from "../../components/CityCreation/CityCreation";
import Header from "../../components/Header/Header";

// STYLES
import "./Create.css";

const Create = () => {
    const storedToken = localStorage.getItem('accessToken');

    return (
        <>
            <Header/>
            <div className="body-creation">
                <h1>Create all you need!</h1>
                <div className="creation-box">
                    <CityCreation/>
                </div>
            </div>
        </>
    );
}

export default Create;