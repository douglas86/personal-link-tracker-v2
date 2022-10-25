import styles from "../../../styles/components/molecule/Form.module.css";
import { title } from "../atom";

const Form = (inputsArray, register) => {
  return (
    <>
      {inputsArray.map((items, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={title(items)}
            className={styles.input}
            {...register(items, { required: `${items} is required` })}
          />
        </div>
      ))}
    </>
  );
};

export default Form;
