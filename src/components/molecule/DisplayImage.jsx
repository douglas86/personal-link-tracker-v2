import useAppContext from "../../hooks/useAppContext";
import { buttons, img } from "../atom";

const DisplayImage = () => {
  const { state, dispatch } = useAppContext();
  const { formReducers } = state;

  return (
    <div>
      {img(formReducers.image, 300, 300)}
      {buttons("danger", "Remove Image", () =>
        dispatch({ type: "REMOVE_IMAGE_OBJECT" })
      )}
    </div>
  );
};

export default DisplayImage;
