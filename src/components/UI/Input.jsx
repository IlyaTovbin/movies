import React from 'react';

const Input = props => {
    const { label, name, register } = props;
    const classProp = props.class ? props.class : 'form-control';
    const inputAttr = props.inputAttr ? props.inputAttr : '';
    return (
        <div>
            <label htmlFor={name} className="form-label">{ label }</label>
            <input { ...inputAttr } {...register(name, { required: true })} className={classProp} id={name} />
        </div>
    );
}

export default Input;
 