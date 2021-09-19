import button from './button.module.css';

const Button = ({children, ...props}) => {
    const buttonClasses = [button.button];

    if (props.about) {
        buttonClasses.push(button.about)
    }
    
    return (
        <button className={buttonClasses.join(' ')} {...props}>{children}</button>
    );
};

export default Button;