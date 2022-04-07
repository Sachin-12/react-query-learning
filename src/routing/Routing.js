import { Link, Route, Routes } from "react-router-dom";
import DependentQueries from "../components/atoms/DependentQueries";
import DynamicQueries from "../components/atoms/DynamicQueries";
import KollywoodActor from "../components/atoms/KollywoodActor";
import KollywoodActors from "../components/atoms/KollywoodActors";
import KollywoodActorsRQ from "../components/atoms/KollywoodActorsRQ";
import ParallelQueries from "../components/atoms/ParallelQeries";
import PaginatedQuery from "../components/atoms/PaginatedQuery";
import InfiniteQueries from "../components/atoms/InfiniteQueries";

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
          <li>
            <Link to="/parallel-queries">Parallel Queries</Link>
          </li>
          <li>
            <Link to="/dynamic-queries">Dynamic Queries</Link>
          </li>
          <li>
            <Link to="/dependent-queries/1">Dependent Queries</Link>
          </li>
          <li>
            <Link to="/paginated-query">Paginated Query</Link>
          </li>
          <li>
            <Link to="/infinite-queries">Infinite Queries</Link>
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
        <Route exact path="/parallel-queries" element={<ParallelQueries />} />
        <Route
          exact
          path="/dynamic-queries"
          element={<DynamicQueries ids={[1, 2, 3]} />}
        />
        <Route
          exact
          path="/dependent-queries/:id"
          element={<DependentQueries />}
        />
        <Route exact path="/paginated-query" element={<PaginatedQuery />} />
        <Route exact path="/infinite-queries" element={<InfiniteQueries />} />
      </Routes>
    </>
  );
};

export default Routing;
