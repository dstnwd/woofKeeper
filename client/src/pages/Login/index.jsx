import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();

    const goToSignUp = useCallback(() => {
        navigate('/sign-up')
    }, [navigate]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Woof Keeper | Login</title>
            </Helmet>

            <div className="container">
                <div className="row mx-0 pt-4">

                    <div className="col-0 col-sm-0 col-md-3"></div>

                    <div className={`col-12 col-sm-12 col-md-6`}>
                        <div className={`${styles.loginTop} row mx-0`}>
                            <div className="col px-4 pt-4 pb-2">
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label w-100 text-start">Your email address</label>
                                            <input type="email" className="form-control" id="username" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label w-100 text-start">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.loginBottom} row mx-0`}>
                            <div className="col p-4">
                                <p className="mb-0">Sign In</p>
                            </div>
                        </div>

                        <div className="row mx-0 pt-4">
                            <div className="col">
                                <p className="mb-0">Forgot password?</p>
                            </div>
                        </div>

                        <div className="row mx-0 pt-4">
                            <div className="col">
                                <p className={`${styles.signUpLink} mb-0`} onClick={goToSignUp}>Don't have an account? Sign up</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-0 col-sm-0 col-md-3"></div>

                </div>
            </div>
        </>
    );
}
 
export default Login;
