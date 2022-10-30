import FormTemplate from "../../../src/components/templates/FormTemplate";
import useAppContext from "../../../src/hooks/useAppContext";
import { useEffect } from "react";

const create = () => {
  const { state, dispatch } = useAppContext();
  const { dataReducers } = state;

  useEffect(() => {
    dispatch({ type: "REMOVE_IMAGE_OBJECT" });
    dispatch({
      type: "POPULATE_FORM_DATA",
      inputArray: ["title", "url"],
      endpoint: "/links",
    });
  }, [dispatch]);

  return (
    <div>
      <FormTemplate checkbox={dataReducers.categoryData} />
    </div>
  );
};

export default create;
