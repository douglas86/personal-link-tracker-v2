import useAppContext from "../../../hooks/useAppContext";

const Handlers = () => {
  const { dispatch } = useAppContext();

  const handleOnSubmit = (data) => dispatch({ type: "FORM_INPUTS_DATA", data });

  return {
    handleOnSubmit,
  };
};

export default Handlers;
