import useAppContext from "../../hooks/useAppContext";

const Handlers = () => {
  const { dispatch } = useAppContext();

  const handleOnSubmit = (data) => {
    dispatch({ type: "FORM_INPUTS_DATA", data });
  };

  const handleImageChange = (imageList) =>
    dispatch({ type: "IMAGE_UPLOAD", image: imageList[0].data_url });

  return {
    handleOnSubmit,
    handleImageChange,
  };
};

export default Handlers;
