import axios from "axios";
import { useEffect } from "react";
import { useQueries } from "react-query";

const DynamicQueries = ({ ids }) => {
  const result = useQueries(
    ids.map((id) => {
      return {
        queryKey: ["dynamic-query-kollywood-actor", id],
        queryFn: () => axios.get(`/kollywood-actor/${id}`)
      };
    })
  );

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <>
      <p> DynamicQueries </p>
      <ul>
        {result?.map((actor) => (
          <li key={actor?.data?.data?.id}>{actor?.data?.data?.name}</li>
        ))}
      </ul>
    </>
  );
};

export default DynamicQueries;
