import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

import Handlers from "../helpers/Handlers";

import styles from "./styles/Forms.module.css";

const Forms = ({ inputsArray }) => {
  const { handleOnSubmit } = Handlers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
        {inputsArray.map((items, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={items[0].toUpperCase() + items.substring(1)}
              className={styles.input}
              {...register(items, { required: `${items} is required` })}
            />
            {Object.entries(errors).map(([key, values]) => (
              <p key={key} className={styles.p}>
                {key === items && values.type === "required" && values.message}
              </p>
            ))}
          </div>
        ))}
        <Button type="submit" className={styles.button} variant="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Forms;
