import { useForm } from "react-hook-form";
import { Button, Container } from "react-bootstrap";

import ShowCheckbox from "../organism/ShowCheckbox";
import ShowRadio from "../organism/ShowRadio";

import styles from "../../../styles/components/templates/FormTemplate.module.css";

import useAppContext from "../../hooks/useAppContext";
import FormInputs from "../organism/FormInputs";
import Handlers from "../../Handlers/HandleCRUD";

const FormTemplate = ({ checkbox }) => {
  const { state } = useAppContext();
  const { formReducers } = state;
  const { radioBtn, inputArray } = formReducers;

  const { handleOnSubmit } = Handlers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkbox: [],
    },
  });

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
              {radioBtn && Object.keys(radioBtn).length !== 0 ? (
                <ShowRadio register={register} />
              ) : null}
            </section>
          </div>
          <div className={styles.rightSide}>
            {inputArray ? (
              <FormInputs register={register} errors={errors} />
            ) : null}
            <Button type="submit" className={styles.button}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default FormTemplate;
