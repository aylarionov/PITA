import { useState } from "react";
import { useEffect } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          if (value.length < validations[validation]) {
            setMinLengthError(true);
            setErrors((prev) => ({
              ...prev,
              minLength: "Слишком мало символов",
            }));
          } else {
            setMinLengthError(false);
            setErrors((prev) => ({ ...prev, minLength: "" }));
          }
          break;
        case "maxLength":
          if (value.length > validations[validation]) {
            setMaxLengthError(true);
            setErrors((prev) => ({
              ...prev,
              maxLength: "Очень уж много символов",
            }));
          } else {
            setMaxLengthError(false);
            setErrors((prev) => ({ ...prev, maxLength: "" }));
          }
          break;
        case "isEmpty":
          if (value) {
            setEmpty(false);
            setErrors((prev) => ({ ...prev, isEmpty: "" }));
          } else {
            setEmpty(true);
            setErrors((prev) => ({ ...prev, isEmpty: "Как-то пустовато" }));
          }
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(String(value).toLowerCase())) {
            setEmailError(false);
            setErrors((prev) => ({ ...prev, isEmail: null }));
          } else {
            setEmailError(true);
            setErrors((prev) => ({
              ...prev,
              isEmail: "Напишите правильную почту",
            }));
          }
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid,
    errors,
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
