import useQueryActorById from "../../hooks/useQueryActorById";

const ParallelQueries = () => {
  let id = 1;
  const { data: actor1, isFetching: fetchingActor1 } = useQueryActorById(id);
  const { data: actor2, isFetching: fetchingActor2 } = useQueryActorById(++id);
  const { data: actor3, isFetching: fetchingActor3 } = useQueryActorById(++id);

  if (fetchingActor1 || fetchingActor2 || fetchingActor3) {
    return <p> Loading ... </p>;
  }

  return (
    <>
      <p> KollywoodActor Details page </p>
      <p>{actor1?.data?.name}</p>
      <p>{actor1?.data?.id}</p>
      <br />
      <p>{actor2?.data?.name}</p>
      <p>{actor2?.data?.id}</p>
      <br />
      <p>{actor3?.data?.name}</p>
      <p>{actor3?.data?.id}</p>
    </>
  );
};

export default ParallelQueries;
