import React, { useState } from "react";

export const useValidationForm = ({ name, value }) => {
  const [valid, setValid] = useState(true);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value) setMsg("Name is Required", false, tue);
        break;
      default:
        setMsg();
        break;
    }
  };

  const setMsg = (msg = "", valid = true, touched = true) => {
    setError(msg);
    setTouched(touched);
    setValid(valid);
  };
  useEffect(() => {
    validate(name, value);
  }, [name, value]);

  return { valid, touched, error, value };
};
