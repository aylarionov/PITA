import input from './input.module.css';

const Input = (props) => {
    return (
        <input className={input.input} {...props}/>
    );
};

export default Input;