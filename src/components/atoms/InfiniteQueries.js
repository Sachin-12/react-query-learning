import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const fetchCartoons = ({ pageParam = 1 }) => {
  return axios.get(`/cartoons?limit=2&pageNum=${pageParam}`);
};

const InfiniteQueries = () => {
  const {
    data,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(["cartoons"], fetchCartoons, {
    getNextPageParam: (_lastPage, pages) => {
      // console.log(`pages ${JSON.stringify(pages, 2, null)}`);
      // console.log(`_lastPage ${JSON.stringify(_lastPage, 2, null)}`);
      if (pages.length < 5) {
        return pages.length + 1;
      } else {
        // returning undefined will cause the hasNextPage to be false
        return undefined;
      }
    }
  });
  if (isFetching && !isFetchingNextPage) {
    return <p> Loading... </p>;
  }
  return (
    <>
      <p>InfiniteQueries</p>
      <ul>
        {/* Unlike other useQueries this will contain data.pages which 
        is an array of objects containing the api response */}
        {data?.pages.map((group, index) => {
          return (
            <Fragment key={index}>
              {group?.data.map((cartoon) => {
                return (
                  <h2 key={cartoon.name}>
                    {cartoon.id} {cartoon.name}
                  </h2>
                );
              })}
            </Fragment>
          );
        })}
      </ul>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load more..
      </button>
    </>
  );
};

export default InfiniteQueries;
