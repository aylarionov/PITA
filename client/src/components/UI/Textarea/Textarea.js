import textarea from "./textarea.module.css";

const Textarea = (props) => {
  return <textarea className={textarea.textarea} {...props}/>;
};

export default Textarea;
