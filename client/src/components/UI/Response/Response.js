import response from "./response.module.css";

const Response = ({ children, ...props }) => {
  return <div className={response.text}>{children}</div>;
};

export default Response;
