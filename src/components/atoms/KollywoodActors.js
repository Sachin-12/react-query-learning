import axios from "axios";
import { useEffect, useState } from "react";

const KollywoodActors = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/kollywood-actors") // make path as "/kollywood-actors1" to return 404 error
      .then((data) => {
        console.log(data);
        setData(data.data.result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      {isLoading && <p>Loading..</p>}
      <h2>KollywoodActors using Normal fetch</h2>
      <ul>
        {data?.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </>
  );
};

export default KollywoodActors;
