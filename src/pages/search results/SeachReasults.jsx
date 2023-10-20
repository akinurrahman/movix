import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/content wrapper/ContentWrapper";
import MovieCard from "../../components/movie card/MovieCard";
import Spinner from "../../components/spinner/Spinner";

const SearchResult = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const { query } = useParams();
  const [pageNo, setPageNo] = useState(1);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const fetchData = (pageNum) => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then((res) => {
        if (res.results) {
          setData([...data, ...res.results]);
          setLoading(false);
          if (res.results.length === 0) {
            setHasMore(false);
          }
        } else {
          setError("No results found."); // Handle API response with no results
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Error fetching data. Please try again later."); // Handle API request errors
      });
  };

  useEffect(() => {
    fetchData(1); // Fetch the initial data
  }, [query]);

  const fetchNextPageData = () => {
    // const nextPage = Math.floor(data.length / 20) + 1; // Adjust the 20 to match your API's page size
    const nextPage = pageNo + 1;
    fetchData(nextPage);
    setPageNo(nextPage);
  };

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.length > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data.length}
                next={fetchNextPageData}
                hasMore={hasMore}
                loader={<Spinner />}
              >
                {data
                  .filter((item) => item.media_type !== "person")
                  .map((item, index) => (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  ))}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
