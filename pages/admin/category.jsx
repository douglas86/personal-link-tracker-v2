import { heading } from "../../src/components/atom";

import useAppContext from "../../src/hooks/useAppContext";
import { useEffect } from "react";
import FormTemplate from "../../src/components/templates/FormTemplate";

const category = () => {
  const { state, dispatch } = useAppContext();

  const role = state && state.dataReducers.role === "admin";

  useEffect(() => {
    dispatch({ type: "REMOVE_IMAGE_OBJECT" });
    dispatch({
      type: "POPULATE_FORM_DATA",
      inputArray: ["title", "description"],
      endpoint: "/category",
    });
  }, []);

  return (
    <div>
      {role ? (
        <>
          {heading("Create a category")}
          <FormTemplate uploadImage={true} />
        </>
      ) : (
        <h1>You are not allowed here</h1>
      )}
    </div>
  );
};

export default category;
