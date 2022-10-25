import { formErrors, labels, spinner, title } from "../atom";
import useAppContext from "../../hooks/useAppContext";

const ShowCheckbox = ({ errors, register, whatIsBeingRegistered }) => {
  const { state } = useAppContext();
  const { dataReducers } = state;

  return (
    <>
      {labels("text-muted ml-4", title(whatIsBeingRegistered))}
      {dataReducers.categoryData
        ? dataReducers.categoryData.map(({ id, title }) => (
            <div key={id}>
              <input
                {...register("checkbox", {
                  required: true,
                })}
                type="checkbox"
                value={title}
              />{" "}
              <label>{title}</label>
            </div>
          ))
        : spinner()}
      {formErrors(errors.checkbox, "This is a checkbox")}
    </>
  );
};

export default ShowCheckbox;
