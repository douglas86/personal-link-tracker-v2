import { labels, title } from "../atom";

import { useState } from "react";

const ShowRadio = ({ titles, array, defaultValue, register }) => {
  const [state, setState] = useState(defaultValue);

  return (
    <>
      {labels("text-muted ml-4", title(titles))}
      {array.map((items) => (
        <div key={items}>
          <input
            {...register(titles, { required: true })}
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
