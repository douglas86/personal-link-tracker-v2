import useSWR from "swr";

const useFetch = (endpoint) => {
  const fetcher = () => fetch("/api" + endpoint).then((res) => res.json());
  const { data } = useSWR("/api" + endpoint, fetcher);
  return data ? data.data : undefined;
};

export default useFetch;
