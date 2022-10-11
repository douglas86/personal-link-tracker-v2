import Forms from "../../src/components/organism/Forms";
import { titles } from "../../src/components/atom";

import useAppContext from "../../src/hooks/useAppContext";

const category = () => {
  const { state } = useAppContext();

  const role = state && state.dataReducers.role === "admin";
  const inputsArray = ["title", "description"];

  return (
    <div>
      {role ? (
        <>
          {titles("Create a category")}
          <Forms inputsArray={inputsArray} />
        </>
      ) : (
        <h1>You are not allowed here</h1>
      )}
    </div>
  );
};

export default category;
