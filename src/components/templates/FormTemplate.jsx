import { useForm } from "react-hook-form";
import { Button, Container } from "react-bootstrap";

import ShowCheckbox from "../organism/ShowCheckbox";
import ShowRadio from "../organism/ShowRadio";

import styles from "../../../styles/components/templates/FormTemplate.module.css";

import useAppContext from "../../hooks/useAppContext";
import FormInputs from "../organism/FormInputs";
import Handlers from "../../Handlers/HandleCRUD";
import ImageUpload from "../molecule/ImageUpload";
import DisplayImage from "../molecule/DisplayImage";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const FormTemplate = ({ checkbox, uploadImage = false }) => {
  const { state } = useAppContext();
  const { formReducers } = state;
  const { inputArray } = formReducers;

  const { data: session } = useSession();

  const { handleOnSubmit } = Handlers();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkbox: [],
    },
  });

  useEffect(() => {
    setValue("image", formReducers.image);
    formReducers.image === null
      ? reset()
      : register("image", { required: true });
  }, [formReducers, register, setValue]);

  return (
    <Container>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.flex}>
          <div className={styles.leftSide}>
            <section>
              {checkbox ? (
                <ShowCheckbox
                  checkbox={checkbox}
                  register={register}
                  label="checkbox"
                  errors={errors.checkbox}
                />
              ) : null}
            </section>

            <section>
              <ShowRadio
                titles="types"
                array={["Free", "Pain"]}
                defaultValue="Free"
                register={register}
              />
              <ShowRadio
                titles="medium"
                array={["Books", "Video"]}
                defaultValue="Books"
                register={register}
              />
            </section>
          </div>
          <div className={styles.rightSide}>
            {inputArray ? (
              <FormInputs register={register} errors={errors} />
            ) : null}
            {uploadImage ? <ImageUpload /> : null}
            {uploadImage && errors.image && (
              <p className={styles.p}>
                images are required, only accepts png files
              </p>
            )}
            <Button type="submit" className={styles.button} disabled={!session}>
              Submit
            </Button>
          </div>
          <div style={formReducers.image ? { width: "25%" } : null}>
            {formReducers.image ? <DisplayImage /> : null}
          </div>
        </div>
      </form>
    </Container>
  );
};

export default FormTemplate;
