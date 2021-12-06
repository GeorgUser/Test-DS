import React, {useState} from "react";
import PropTypes from "prop-types"

const TextInput = React.forwardRef((props, ref) => {
    const [focusInput, setFocusInput] = useState(false);
    const {errors, value, className, name, label, fieldName, type, onChange} = props;

    const generateClass = (element) => {
        let classList = '';

        if(errors) {
            classList += "error";
        }

        if(classList !== '') {
            classList += ' ';
        }

        if(focusInput || value ) {
            classList += (element + "-focus");
        }

        return classList;
    }

    const handleFocus = () => {
        setFocusInput(true);
    }

    const handleBlur = () => {
        setFocusInput(false);
    }

    return (
        <div className={className}>
            <label
                className={generateClass('label')}
                htmlFor={name}>{label} {errors && !focusInput && "is required."}
            </label>
            {fieldName === "input" ? (
                <input
                    ref={ref}
                    className={generateClass('input')}
                    type={type}
                    name={name}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <textarea
                    ref={ref}
                    className={generateClass('input')}
                    name={name}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    onChange={onChange}
                />
            )}

        </div>
    );
})

TextInput.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default TextInput;