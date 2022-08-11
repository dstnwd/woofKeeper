import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { states } from '../../constants/states';
import SelectControl from '../../components/SelectControl';
import styles from './SignUp.module.css';

const Login = () => {
    const [state, setState] = useState(null);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Woof Keeper | Sign Up</title>
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
                                            <label htmlFor="name" className="form-label w-100 text-start">Your name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Provide first name and last name" />
                                        </div>
                                    </div>
                                </div>

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
                                            <label htmlFor="street" className="form-label w-100 text-start">Where do you live?</label>
                                            <input type="text" className="form-control" id="street" placeholder="Street address" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col pr-1">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="city" placeholder="City" />
                                        </div>
                                    </div>
                                    <div className="col px-1">
                                        <div className="mb-3">
                                            <SelectControl
                                                id="state"
                                                options={states}
                                                value={state}
                                                placeholder="Select a state"
                                                handleSelect={(newValue) => setState(newValue)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col pl-1">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="zipcode" placeholder="Zip code" />
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

                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="confirm-password" className="form-label w-100 text-start">Confirm password</label>
                                            <input type="confirm-password" className="form-control" id="confirm-password" placeholder="Password" />
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
                                <p className="mb-0">Don't have an account? Sign up</p>
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
