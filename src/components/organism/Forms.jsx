import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

import ImageUpload from "../molecule/ImageUpload";
import DisplayImage from "../molecule/DisplayImage";

import Handlers from "../../Helpers/components/Handlers";
import useAppContext from "../../hooks/useAppContext";

import styles from "../../../styles/components/organism/Forms.module.css";
import { useEffect } from "react";

const Forms = ({ inputsArray, showImageInput = false }) => {
  const { state } = useAppContext();
  const { formReducers } = state;
  const { handleOnSubmit } = Handlers();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("image", formReducers.image);
    !formReducers.image && register("image", { required: true });
  }, [formReducers, register, setValue]);

  return (
    <div className={styles.div}>
      <div style={formReducers.image ? { width: "75%" } : { width: "100%" }}>
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
                  {key === items &&
                    values.type === "required" &&
                    values.message}
                </p>
              ))}
            </div>
          ))}
          {showImageInput ? <ImageUpload /> : null}
          {errors.image && <p className={styles.p}>images are required</p>}
          <Button type="submit" className={styles.button} variant="primary">
            Submit
          </Button>
        </form>
      </div>
      <div style={formReducers.image ? { width: "25%" } : null}>
        {formReducers.image ? <DisplayImage /> : null}
      </div>
    </div>
  );
};

export default Forms;
