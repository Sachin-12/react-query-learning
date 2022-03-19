import { Route, Routes } from "react-router-dom";
import KollywoodActors from "../components/atoms/KollywoodActors";
import KollywoodActorsRQ from "../components/atoms/KollywoodActorsRQ";

const Routing = (props) => {
  return (
    <>
      <Routes>
        <Route exact path="/kollywood-actors" element={<KollywoodActors />} />
        <Route
          exact
          path="/kollywood-actors-rq"
          element={<KollywoodActorsRQ />}
        />
      </Routes>
    </>
  );
};

export default Routing;
