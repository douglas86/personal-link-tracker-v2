import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";

import ShowCheckbox from "../organism/ShowCheckbox";
import ShowRadio from "../organism/ShowRadio";

import useAppContext from "../../hooks/useAppContext";

const FormTemplate = ({ checkbox }) => {
  const { state } = useAppContext();
  const { formReducers } = state;
  const { radioBtn } = formReducers;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkbox: [],
    },
  });

  const onSubmit = (data) => console.log("data", data);

  return (
    <Container>
      <div style={{ display: "flex", margin: "2%" }}>
        <div style={{ width: "25%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <input type="submit" />
          </form>
        </div>
        <div style={{ width: "75%" }}>
          <h1>Right</h1>
        </div>
      </div>
    </Container>
  );
};

export default FormTemplate;
