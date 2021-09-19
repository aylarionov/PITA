import error from "./error.module.css";

const Error = ({ errors, type }) => {
  const errorClasses = [error.wrapper];
  const errorsArr = Object.values(errors);
  
  console.log(errorsArr)
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
    default:
      break;
  }

  return (
    <div className={errorClasses.join(" ")}>
      <h4>Упс... поле {type}:</h4>
      <ul className={error.lists}>
        {errorsArr.map(
          (el, i) =>
            el && (
              <li key={i} className={error.error}>
                {el}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Error;
