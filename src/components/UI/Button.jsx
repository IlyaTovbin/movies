const Button = props => {
    const { type } = props;
    const classProp = props.class ? props.class : 'btn btn-primary';
    const text = props.loader ? props.loader : props.text;
    return (
        <button type={type} className={classProp}>{text}</button>
    );
}

export default Button;
 
