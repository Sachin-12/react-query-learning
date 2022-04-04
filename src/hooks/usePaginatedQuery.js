import axios from "axios";
import { useQuery } from "react-query";

const fetchColorsByPage = ({ queryKey }) => {
  return axios.get(`/cartoons?limit=2&pageNum=${queryKey[1]}`);
};

const usePaginatedQuery = (pageNum) => {
  return useQuery(["colours", pageNum], fetchColorsByPage, {
    // If you keep this false which is default, you will see loading state to true every time new query is made 
    keepInitialData: true
  });
};

export default usePaginatedQuery;
