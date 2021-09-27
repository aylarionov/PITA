import { useState } from "react";
import { useEffect } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          if (value.length < validations[validation]) {
            setMinLengthError(true);
            setErrors((prev) => {
              if (prev.find((el) => Object.keys(el)[0] === "minLength")) {
                return prev;
              } else {
                return [
                  ...prev,
                  {
                    minLength: `Слишком коротко! Нужно хотя бы ${validations[validation]} символа`,
                  },
                ];
              }
            });
          } else {
            setMinLengthError(false);
            setErrors((prev) =>
              prev.filter((el) => Object.keys(el)[0] !== "minLength")
            );
          }
          break;
        case "maxLength":
          if (value.length > validations[validation]) {
            setMaxLengthError(true);
            setErrors((prev) => {
              if (prev.find((el) => Object.keys(el)[0] === "maxLength")) {
                return prev;
              } else {
                return [
                  ...prev,
                  {
                    maxLength: `Очень уж много символов! Максимум может быть ${validations[validation]}`,
                  },
                ];
              }
            });
          } else {
            setMaxLengthError(false);
            setErrors((prev) =>
              prev.filter((el) => Object.keys(el)[0] !== "maxLength")
            );
          }
          break;
        case "isEmpty":
          if (value) {
            setEmpty(false);
            setErrors((prev) =>
              prev.filter((el) => Object.keys(el)[0] !== "isEmpty")
            );
          } else {
            setEmpty(true);
            setErrors((prev) => {
              if (prev.find((el) => Object.keys(el)[0] === "isEmpty")) {
                return prev;
              } else {
                return [...prev, { isEmpty: "Как-то пустовато" }];
              }
            });
          }
          break;
        case "isEmail":
          const re =
            /^([a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-zA-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b)$/;

          if (re.test(String(value))) {
            setEmailError(false);
            setErrors((prev) =>
              prev.filter((el) => Object.keys(el)[0] !== "isEmail")
            );
          } else {
            setEmailError(true);
            setErrors((prev) => {
              if (prev.find((el) => Object.keys(el)[0] === "isEmail")) {
                return prev;
              } else {
                return [...prev, { isEmail: "Напишите правильную почту" }];
              }
            });
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
