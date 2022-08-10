import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className="container">
            <div className="row mx-0 pt-4">

                <div className="col-0 col-sm-0 col-md-4"></div>

                <div className={`${styles.login} col-12 col-sm-12 col-md-4 p-4`}>
                    <div className="row">
                        <div className="col">
                            <div class="mb-3">
                                <label for="username" className="form-label w-100 text-start">Your email address</label>
                                <input type="email" className="form-control" id="username" placeholder="name@example.com" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div class="mb-3">
                                <label for="password" className="form-label w-100 text-start">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col pt-4">
                            <button type="button" className={`${styles.accessButton} btn w-100`}>Primary</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col"></div>
                    </div>
                </div>

                <div className="col-0 col-sm-0 col-md-4"></div>

            </div>
        </div>
    );
}
 
export default Login;
