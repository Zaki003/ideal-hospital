import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleGoogleSignIn, handleEmailSignIn, setUser, setIsLoading, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const onSubmit = (data) => {
        // e.preventDefault();
        console.log(data);
        // if (data.password !== user.password) {
        //     return <h3>Password Invalid</h3>
        // }
        handleEmailSignIn(data.email, data.password);

    };
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
                setUser(result.user);
                setIsLoading(false);
            })
    };
    return (
        <div className="flex justify-center items-center mt-12">
            <div className="login-page p-12 mx-auto bg-pink-100 w-2/5">
                <h2 className="text-3xl">Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                    <input type="email" placeholder="Your Email" defaultValue="" {...register("email", { required: true })} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input type="password" placeholder="Your Password" {...register("password", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {(errors.email || errors.password) && <span style={{ color: "red" }}>This field is required</span>}

                    <input type="submit" />
                </form>
                <h3 className="text-2xl text-center">Or</h3>
                <button type="submit" onClick={handleGoogleLogin}>Google Sign In</button>
                <p>Don't have an account? <Link to="/register">Create Account here.</Link></p>
            </div>
        </div>

    );
};

export default Login;