import { useParams } from "react-router-dom";
import useInitialQueryData from "../../hooks/useInitialQueryData";
// import useQueryActorById from "../../hooks/useQueryActorById";

const KollywoodActor = () => {
  const { id } = useParams();
  // const { data, isFetching } = useQueryActorById(id);
  const { data, isLoading } = useInitialQueryData(id);

  // if (isFetching) {
  //   return <p> Loading ... </p>;
  // }

  if (isLoading) {
    return <p> Loading ... </p>;
  }

  return (
    <>
      <p> KollywoodActor Details page </p>
      <p>{data?.data?.name}</p>
      <p>{data?.data?.id}</p>
    </>
  );
};

export default KollywoodActor;
