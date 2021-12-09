import React, { useState } from 'react';
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import Title from '../../components/UI/Title'
import { useForm } from 'react-hook-form';
import { onSubmit } from './AdminLogic';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/UI/Loader';
import { Navigate  } from 'react-router-dom';

const Admin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loader, setLoader] = useState(false);
    const [view, setView] = useState(false);

    const errorStyle = {
        color: 'red',
        padding:' 0.375rem 0.75rem'
    }

    async function preOnSubmit(data) {
        setLoader(Loader)
        const result = await onSubmit(data);
        if(result) {
            const redirectObj = { pathname: "/" };
            setView(<Navigate push to={redirectObj} />);
        }
        setLoader(false)
    }

    return (
        <div className="mt-5">
        <Title className="text-center" title="Admin" />
        <form onSubmit={handleSubmit(preOnSubmit)} >

            <Input register={register} label="Title" name="title" inputAttr={{ type: 'text' }} />
            { errors.title ? <small style={ errorStyle }>Title field is required</small> : '' }

            <Input register={register} inputAttr={{ type: 'text' }} label="Image url" name="image_url"/>
            { errors.image_url ? <small style={ errorStyle }>Image url field is required</small> : '' }

            <Input register={register} inputAttr={{step: 1, min:1, max:10, type: 'range' }} label="Rating" name="rating" class="form-range" />
            <Button loader={loader} text="Save" type="submit" />
        </form>
        <ToastContainer position="top-center" />
        {view}
    </div>
    );
}

export default Admin;
 