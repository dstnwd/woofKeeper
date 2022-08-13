import React, {useCallback, useMemo} from 'react';

const InputControl = ({label, placeholder, value, onChange, id, type = 'text', validate, isValid}) => {
    const changeHandler = useCallback(
        (ev) => {
            onChange(ev.target.value);
        },
        [onChange],
    );

    const inputClassName = useMemo(() => {
        const defaultClassName = 'form-control';

        return isValid ? defaultClassName : `${defaultClassName} is-invalid`;
    }, [isValid]);

    return (
        <>
            {label && (
                <label htmlFor={id} className="form-label w-100 text-start">{label}</label>
            )}
            <input type={type} className={inputClassName} id={id} placeholder={placeholder} value={value}
                   onChange={changeHandler}
                   onBlur={validate}
            />
        </>
    );
};

export default InputControl;
