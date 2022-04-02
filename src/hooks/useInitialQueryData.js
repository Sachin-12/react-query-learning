import { useQuery, useQueryClient } from "react-query";
import { fetchKollywoodActors } from "../components/atoms/KollywoodActorsRQ";

const useInitialQueryData = ({ actorId }) => {
  const queryClient = useQueryClient();
  return useQuery(["kollywood-actor", actorId], fetchKollywoodActors, {
    initialData: () => {
      const actor = queryClient
        .getQueryData("kollywood-actors")
        ?.data?.result?.find((actor) => actor.id === parseInt(actorId, 10));
      if (actor) {
        // Should be returned in the same structure for this to work
        return {
          data: actor
        };
      } else {
        //  returning undefined is important as this makes
        //  isLoading to true thereby preventing any runtime errors
        return undefined;
      }
    }
  });
};

export default useInitialQueryData;
