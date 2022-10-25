import { labels, title } from "../atom";

import useAppContext from "../../hooks/useAppContext";

const ShowRadio = ({ register }) => {
  const { state, dispatch } = useAppContext();
  const { formReducers } = state;
  const { radioBtn } = formReducers;

  return (
    <>
      {Object.entries(radioBtn).map(([key, values]) => (
        <div key={key}>
          {labels("text-muted ml-4", title(key))}
          {values.array.map((list) => (
            <div key={list}>
              <input
                {...register(key, { required: true })}
                type="radio"
                value={list}
                checked={list === values.defaultValue}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_RADIO_DEFAULT",
                    radioName: key,
                    array: values.array,
                    defaultValue: e.target.value,
                  })
                }
              />{" "}
              <label>{list}</label>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ShowRadio;
