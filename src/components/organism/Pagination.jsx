import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";
import useAppContext from "../../hooks/useAppContext";
import { spinner } from "../atom";
import { mapToPagination } from "../molecule/mapToPagination";
import { Container } from "react-bootstrap";

const Pagination = ({ slug }) => {
  const { state, dispatch } = useAppContext();
  const { dataReducers } = state;
  const [skip, setSkip] = useState(2);
  const endpoint = `/api/links?slug=${slug}&skip=${skip}`;

  const getMore = async () => {
    const res = await fetch(endpoint);
    const newData = await res.json();
    setSkip(skip + 2);
    dispatch({
      type: "UPDATE_PAGINATION",
      pagination: [...state.dataReducers.pagination, ...newData.data],
    });
  };

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={getMore}
        hasMore={dataReducers.pagination.length < dataReducers.len}
        loader={<div key={0}>{spinner()}</div>}
      >
        {dataReducers.pagination.map((items) => (
          <div key={items.id}>{mapToPagination(items)}</div>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default Pagination;
