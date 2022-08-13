import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoPicture from 'assets/images/logo-pic.png';
import styles from './Navbar.module.css';
import Button from "components/Button";

const Index = () => {
    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate('/login');
    };

    const goToKeeperSearch = (ev) => {
        navigate('/');
    };

    return (
        <div className={`row mx-0`}>
            <div className={`col d-flex align-items-center py-4 ps-4`}>
                <img className={`${styles.logoPicture}`} src={logoPicture} onClick={goToKeeperSearch} />

                <span className={`${styles.logoText} ps-2`} onClick={goToKeeperSearch}>My Woof Keeper</span>
            </div>

            <div className={`col col-auto d-flex align-items-center justify-content-end pe-4`}>
                <Button customClassName={`${styles.loginButton}`} onClick={goToLoginPage} label="Login" />
            </div>
        </div>
    );
};

export default Index;
