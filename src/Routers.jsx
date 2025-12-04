import { Route, Routes } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Sample from "./Sample";

const Routers = () => {

  return (
    <Routes>
      <Route path="/pg1" element={<Page1 />} />
      <Route path="/sample" element={<Sample />} />
    </Routes>
  );
};

export default Routers;
