import { useEffect } from "react";
import error from "./error.module.css";

const Error = ({ errors, type }) => {
  const errorClasses = [error.wrapper];

  switch (type) {
    case "name":
      errorClasses.push(error.name);
      break;
    case "email":
      errorClasses.push(error.email);
      break;
    case "password":
      errorClasses.push(error.password);
      break;
    case "post":
      errorClasses.push(error.post);
      break;
    default:
      errorClasses.push(error.default);
      break;
  }

  return (
    <div className={errorClasses.join(" ")}>
      {type ? (
        <>
          <h4>Упс... поле {type}:</h4>
          <ul className={error.lists}>
            {errors.map((el, i) => (
              <li key={i}>{Object.values(el)[0]}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className={error.lists}>{errors}</p>
      )}
    </div>
  );
};

export default Error;
