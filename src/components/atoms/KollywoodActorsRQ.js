import axios from "axios";
import { useQuery } from "react-query";

const fetchKollywoodActors = () => {
  return axios.get("/kollywood-actors");
};
const KollywoodActorsRQ = () => {
  const { data, isLoading } = useQuery(
    "kollywood-actors",
    fetchKollywoodActors
  );

  if (isLoading) {
    return <p> Loading... </p>;
  }
  return (
    <>
      <h2> Fetching kollywood actors details using react query </h2>
      <ul>
        {data?.data.result.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </>
  );
};
export default KollywoodActorsRQ;
