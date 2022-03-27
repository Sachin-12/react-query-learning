import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

const fetchKollywoodActors = () => {
  return axios.get("/kollywood-actors"); // make path as "/kollywood-actors1" to return 404 error
};
const KollywoodActorsRQ = () => {
  const onSuccess = (data) => {
    console.log(`Side effect after fetching ${JSON.stringify(data, null, 2)}`);
  };
  const onError = (error) => {
    console.log(`side effect after error  ${JSON.stringify(error, null, 2)}`);
  };
  const { data, isLoading, error, isError, isFetching, refetch } = useQuery(
    "kollywood-actors",
    fetchKollywoodActors,
    {
      enabled: false,
      // For notes on these, refer https://www.remnote.com/w/5f97f6a4ad5677003fbf5b78/third-is-a-optional-options-object-where-we-can-set-some-configurations-like-cache-expiry-duration-2BieLGwB3yMwdASAN
      // cacheTime: 10000,
      // staleTime: 10000
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      // refetchInterval: 5000,
      // refetchIntervalInBackground: 2000,
      onSuccess,
      onError
    }
  );

  // Proves that data is cached
  useEffect(() => {
    console.log(`with RQ isLoading: ${isLoading}`);
    console.log(`with RQ isFetching: ${isFetching}`);
  }, [isLoading, isFetching]);

  /*
  React query might retry multiple times before returning error.
  Hence it may take sometime before error appears.
  */
  if (isError) {
    return <h1>{error.message}</h1>;
  } else if (isFetching || isLoading) {
    return <p> Loading </p>;
  }
  return (
    <>
      <h2> Fetching kollywood actors details using react query </h2>
      <ul>
        {data?.data?.result.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      <button onClick={refetch}>Load data </button>
    </>
  );
};
export default KollywoodActorsRQ;
