import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleGoogleSignIn, setUser, setIsLoading, handleRegister } = useAuth();
    const onSubmit = (data) => {
        // e.preventDefault();
        console.log(data);
        handleRegister(data.name, data.email, data.password)
    };
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setIsLoading(false);
            })
    };
    return (
        <div>
            <div className="flex justify-center items-center mt-12">
                <div className="login-page p-12 mx-auto bg-pink-100 w-2/5">
                    <h2 className="text-3xl">Create Your Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                        <input type="text" placeholder="Your Name" {...register("name", { required: true })} />
                        <input type="email" placeholder="Your Email" defaultValue="" {...register("email", { required: true })} />
                        <input type="password" placeholder="Your Password" {...register("password", { required: true })} />
                        <input type="password" placeholder="Confirm Password" {...register("confirmedPassword", { required: true })} />
                        {(errors.name || errors.email || errors.password || errors.confirmedPassword) && <span style={{ color: "red" }}>This field is required</span>}

                        <input type="submit" />
                    </form>
                    <h3 className="text-2xl text-center">Or</h3>
                    <button type="submit" onClick={handleGoogleLogin}>Google Sign In</button>
                    <p>Already have an account? <Link to="/login">Login here.</Link></p>
                </div>
            </div>
        </div>
    );
};


export default Register;