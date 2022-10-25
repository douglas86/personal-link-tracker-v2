import FormTemplate from "../../../src/components/templates/FormTemplate";
import useAppContext from "../../../src/hooks/useAppContext";
import { useEffect } from "react";

const create = () => {
  const { state, dispatch } = useAppContext();
  const { dataReducers } = state;
  const array = ["title", "url"];

  useEffect(() => {
    dispatch({
      type: "POPULATE_FORM_DATA",
      radioBtn: {
        types: { defaultValue: "Free", array: ["Free", "Paid"] },
        medium: { defaultValue: "Book", array: ["Book", "Video"] },
      },
      inputArray: ["title", "url"],
    });
  }, [dispatch]);

  return (
    <div>
      <FormTemplate array={array} checkbox={dataReducers.categoryData} />
    </div>
  );
};

export default create;
