import FormTemplate from "../../../src/components/templates/FormTemplate";
import useAppContext from "../../../src/hooks/useAppContext";
import { useEffect } from "react";

const create = () => {
  const { state, dispatch } = useAppContext();
  const { dataReducers } = state;

  useEffect(() => {
    dispatch({
      type: "POPULATE_FORM_DATA",
      radioBtn: {
        types: { defaultValue: "Free", array: ["Free", "Paid"] },
        medium: { defaultValue: "Book", array: ["Book", "Video"] },
      },
      inputArray: ["title", "url"],
      endpoint: "/links",
      image: null,
    });
  }, [dispatch]);

  return (
    <div>
      <FormTemplate checkbox={dataReducers.categoryData} />
    </div>
  );
};

export default create;
