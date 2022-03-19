import axios from "axios";
import { useQuery } from "react-query";

const fetchKollywoodActors = () => {
  return axios.get("/kollywood-actors"); // make path as "/kollywood-actors1" to return 404 error
};
const KollywoodActorsRQ = () => {
  const { data, isLoading, error, isError } = useQuery(
    "kollywood-actors",
    fetchKollywoodActors
  );

  if (isLoading) {
    return <p> Loading... </p>;
  }

  /*
  React query might retry multiple times before returning error.
  Hence it may take sometime before error appears.
  */
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h2> Fetching kollywood actors details using react query </h2>
      <ul>
        {data?.data?.result.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </>
  );
};
export default KollywoodActorsRQ;
