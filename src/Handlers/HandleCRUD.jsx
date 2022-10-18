import useAppContext from "../hooks/useAppContext";
import { posting } from "../lib/crud/posting";

const Handlers = () => {
  const { dispatch } = useAppContext();

  const handleOnSubmit = (data) => posting("/category", data, dispatch);

  const handleImageChange = (imageList) =>
    dispatch({ type: "IMAGE_UPLOAD", image: imageList[0].data_url });

  return {
    handleOnSubmit,
    handleImageChange,
  };
};

export default Handlers;
