import axios from "axios";
import { useQuery } from "react-query";

const getActorById = ({ queryKey }) => {
  return axios.get(`/kollywood-actor/${queryKey[1]}`);
};

const useQueryActorById = (id) => {
  return useQuery(["kollywood-actor", id], getActorById);
};

export default useQueryActorById;
