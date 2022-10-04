import useSWR from "swr";

const useFetch = (endpoint) => {
  const fetcher = () => fetch(endpoint).then((res) => res.json());
  const { data } = useSWR(endpoint, fetcher);
  return data ? data.data : undefined;
};

export default useFetch;
