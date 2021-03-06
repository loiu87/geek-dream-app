/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
};
