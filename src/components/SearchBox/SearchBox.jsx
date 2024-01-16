// STYLES
import "./SearchBox.css"

const SearchBox = ({text}) => {
    return (
        <div className="searchbox">
            <input type="text" name="searchbox" id="searchbox-input" placeholder={text} />
            <img src="/src/assets/images/search.svg" alt="search icon" className="search-img" onClick={() => {console.log("search")}} />
        </div>
    );
};

export default SearchBox;