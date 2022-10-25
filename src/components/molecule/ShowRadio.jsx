import { useState } from "react";

import { labels, title } from "../atom";

const ShowRadio = ({
  defaultValue,
  arrayRadio,
  register,
  whatIsBeingRegistered,
}) => {
  const [state, setState] = useState(defaultValue);

  return (
    <>
      {labels("text-muted ml-4", title(whatIsBeingRegistered))}
      {arrayRadio.map((items, index) => (
        <div key={index}>
          <input
            {...register(whatIsBeingRegistered, { required: true })}
            type="radio"
            value={items}
            checked={items === state}
            onChange={(e) => setState(e.target.value)}
          />{" "}
          <label>{items}</label>
        </div>
      ))}
    </>
  );
};

export default ShowRadio;
