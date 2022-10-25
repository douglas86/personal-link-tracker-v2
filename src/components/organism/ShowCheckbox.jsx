import { formErrors, labels, title } from "../atom";

const ShowCheckbox = ({ checkbox, register, label, errors }) => {
  return (
    <>
      {labels("text-muted ml-4", title(label))}
      {checkbox.map(({ id, title }) => (
        <div key={id}>
          <input
            {...register(label, { required: true })}
            type={label}
            value={title}
          />{" "}
          <label>{title}</label>
        </div>
      ))}
      {formErrors(errors, "One item needs to be selected")}
    </>
  );
};

export default ShowCheckbox;
