import axios from "axios";
import { useQuery } from "react-query";

export const fetchColorsByPage = ({ queryKey }) => {
  return axios.get(`/cartoons?limit=2&pageNum=${queryKey[1]}`);
};

const usePaginatedQuery = (pageNum) => {
  return useQuery(["cartoon-pagination", pageNum], fetchColorsByPage, {
    // If you keep this false which is default, you will see loading state to true every time new query is made
    keepInitialData: true
  });
};

export default usePaginatedQuery;
