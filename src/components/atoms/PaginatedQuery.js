import { useState, useEffect } from "react";

import usePaginatedQuery from "../../hooks/usePaginatedQuery";
const PaginatedQuery = () => {
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading, isFetching } = usePaginatedQuery(pageNum);

  useEffect(() => {
    console.log(`isLoading ${isLoading}, isFetching ${isFetching}`);
  }, [isLoading, isFetching]);

  if (isLoading) {
    return <p> Loading... </p>;
  }

  return (
    <>
      <p> PaginatedQuery </p>
      <ul>
        {data?.data?.map((cartoon) => {
          return <li key={cartoon?.id}>{cartoon?.name}</li>;
        })}
      </ul>
      <button onClick={() => setPageNum(pageNum - 1)} disabled={pageNum === 1}>
        Prev Page
      </button>
      <br />
      {pageNum}
      <br />
      <button onClick={() => setPageNum(pageNum + 1)} disabled={pageNum === 5}>
        Next Page
      </button>
    </>
  );
};
export default PaginatedQuery;
