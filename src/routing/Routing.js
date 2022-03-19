import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import KollywoodActors from "../components/atoms/KollywoodActors";

const history = createBrowserHistory();

const Routing = (props) => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/kollywood-actors"
          element={<KollywoodActors />}
        ></Route>
      </Routes>
    </>
  );
};

export default Routing;
