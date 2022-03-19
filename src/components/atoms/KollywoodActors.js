import axios from "axios";
import { useEffect, useState } from "react";

const KollywoodActors = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/kollywood-actors").then((data) => {
      console.log(data);
      setData(data);
      setIsLoading(false);
    });
  }, []);
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
