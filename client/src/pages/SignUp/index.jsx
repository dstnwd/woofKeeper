import React, {useCallback, useState} from 'react';
import {Helmet} from 'react-helmet';

import {states} from 'constants/states';
import SelectControl from 'components/SelectControl';
import styles from './SignUp.module.css';
import InputControl from "components/InputControl";

const EMAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUp = () => {
    const [name, setName] = useState(undefined);
    const [isNameValid, setNameValid] = useState(true);

    const [email, setEmail] = useState(undefined);
    const [isEmailValid, setEmailValid] = useState(true);

    const [street, setStreet] = useState(undefined);
    const [isStreetValid, setStreetValid] = useState(true);

    const [city, setCity] = useState(undefined);
    const [isCityValid, setCityValid] = useState(true);

    const [state, setState] = useState(undefined);
    const [isStateValid, setStateValid] = useState(true);

    const [zipCode, setZipCode] = useState(undefined);
    const [isZipCodeValid, setZipCodeValid] = useState(true);

    const [password, setPassword] = useState(undefined);
    const [isPasswordValid, setPasswordValid] = useState(true);

    const [confirmPassword, setConfirmPassword] = useState(undefined);
    const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(true);

    const validateName = useCallback(
        () => {
            if (!name) setNameValid(false);
            else setNameValid(true);
        },
        [setNameValid, name],
    );

    const validateEmail = useCallback(
        () => {
            if (!email) setEmailValid(false);
            else if (!email.match(EMAIL_FORMAT)) {
                console.log('EMAIL VALIDATION', email.match(EMAIL_FORMAT));
                setEmailValid(false);
            }
            else setNameValid(true);
        },
        [setEmailValid, email],
    );

    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
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
                                            <InputControl
                                                label="Your name"
                                                placeholder="Provide first name and last name" value={name}
                                                onChange={setName}
                                                id="name"
                                                validate={validateName}
                                                isValid={isNameValid}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <InputControl
                                                label="Your email"
                                                placeholder="name@example.com" value={email}
                                                onChange={setEmail}
                                                id="email"
                                                validate={validateEmail}
                                                isValid={isEmailValid}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <InputControl
                                                label="Where do you live?"
                                                placeholder="Street address" value={street}
                                                onChange={setStreet}
                                                id="street"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col pr-1">
                                        <div className="mb-3">
                                            <InputControl
                                                placeholder="City" value={city}
                                                onChange={setCity}
                                                id="city"
                                            />
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
                                            <InputControl
                                                placeholder="Zip Code" value={zipCode}
                                                onChange={setZipCode}
                                                id="zipcode"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <InputControl
                                                type="password"
                                                label="Password"
                                                placeholder="Password" value={password}
                                                onChange={setPassword}
                                                id="password"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <InputControl
                                                type="password"
                                                label="Confirm Password"
                                                placeholder="Password" value={confirmPassword}
                                                onChange={setConfirmPassword}
                                                id="confirm-password"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.loginBottom} row mx-0`}>
                            <div className="col p-4">
                                <p className="mb-0">Submit</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-0 col-sm-0 col-md-3"></div>

                </div>
            </div>
        </>
    );
}

export default SignUp;
