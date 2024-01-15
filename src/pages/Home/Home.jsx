import { useState } from "react";

// COMPONENTS
import Header from "../../components/Header/Header";

// STYLES
import "./Home.css";
const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
    </>
  );
};

export default Home;
