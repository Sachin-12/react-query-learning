import { Link, Route, Routes } from "react-router-dom";
import KollywoodActor from "../components/atoms/KollywoodActor";
import KollywoodActors from "../components/atoms/KollywoodActors";
import KollywoodActorsRQ from "../components/atoms/KollywoodActorsRQ";

const Routing = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/kollywood-actors">Actors List </Link>
          </li>
          <li>
            <Link to="/kollywood-actors-rq">Actors List RQ</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/kollywood-actors" element={<KollywoodActors />} />
        <Route
          exact
          path="/kollywood-actors-rq"
          element={<KollywoodActorsRQ />}
        />
        <Route exact path="/kollywood-actor/:id" element={<KollywoodActor />} />
      </Routes>
    </>
  );
};

export default Routing;
