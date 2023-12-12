import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";

export const Ways = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
