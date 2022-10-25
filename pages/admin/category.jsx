import Forms from "../../src/components/organism/Forms";
import { heading } from "../../src/components/atom";

import useAppContext from "../../src/hooks/useAppContext";
import { useEffect } from "react";

const category = () => {
  const { state, dispatch } = useAppContext();

  const role = state && state.dataReducers.role === "admin";
  const inputsArray = ["title", "description"];

  useEffect(() => {
    dispatch({ type: "REMOVE_IMAGE_OBJECT" });
  }, []);

  return (
    <div>
      {role ? (
        <>
          {heading("Create a category")}
          <Forms inputsArray={inputsArray} showImageInput={true} />
        </>
      ) : (
        <h1>You are not allowed here</h1>
      )}
    </div>
  );
};

export default category;
