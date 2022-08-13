import React, {useCallback} from 'react';

const Button = ({ customClassName, label, onClick }) => {

    const clickHandler = useCallback((ev) => {
        ev.preventDefault();
        onClick();
    }, [onClick]);

    return (
        <button type="button" className={`${customClassName}`} onClick={clickHandler}>
            {label}
        </button>
    );
};

export default Button;
