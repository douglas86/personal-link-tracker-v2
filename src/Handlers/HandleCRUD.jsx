import useAppContext from "../hooks/useAppContext";
import { posting } from "../lib/crud/posting";

const Handlers = () => {
  const { state, dispatch } = useAppContext();
  const { formReducers } = state;
  const { endpoint } = formReducers;

  // const handleOnSubmit = (data) => Posting("/category", data, dispatch);
  const handleOnSubmit = (data) => posting(endpoint, data, dispatch);

  const handleImageChange = (imageList) =>
    dispatch({ type: "IMAGE_UPLOAD", image: imageList[0].data_url });

  return {
    handleOnSubmit,
    handleImageChange,
  };
};

export default Handlers;
