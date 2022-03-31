import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const DependentQueries = () => {
  const { id } = useParams();
  const fetchActor = () => {
    return axios.get(`/kollywood-actor/${id}`);
  };
  const fetchActorMovies = ({ queryKey }) => {
    return axios.get(`/movies/actor/${queryKey[1]}`);
  };
  const { data: actor } = useQuery(["kollywood-actor", id], fetchActor);
  // This second query is based on the alterEgo property (Vijay) on the actor object
  const { data: movies } = useQuery(
    ["movies", actor?.data?.alterEgo],
    fetchActorMovies,
    {
      enabled: !!actor?.data?.name
    }
  );

  useEffect(() => {
    console.log(`actor ${JSON.stringify(actor, null, 2)}`);
    console.log(actor);
  }, [actor]);
  return (
    <>
      <p>DependentQueries</p>
      <ul>
        {movies?.data?.movies?.map((movie) => {
          return <li>{movie}</li>;
        })}
      </ul>
    </>
  );
};

export default DependentQueries;
