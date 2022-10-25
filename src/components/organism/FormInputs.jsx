import { title } from "../atom";
import useAppContext from "../../hooks/useAppContext";

import styles from "../../../styles/components/organism/FormInputs.module.css";

const FormInputs = ({ register, errors }) => {
  const { state } = useAppContext();
  const { formReducers } = state;
  const { inputArray } = formReducers;

  return (
    <div>
      {inputArray.map((items) => (
        <div key={items}>
          <input
            {...register(items, { required: `${items} is required` })}
            type="text"
            className={styles.inputs}
            placeholder={title(items)}
          />
          {Object.entries(errors).map(([key, values]) => (
            <p key={key} style={{ color: "red" }}>
              {key === items && values.type === "required" && values.message}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FormInputs;
