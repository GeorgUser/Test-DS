import React from 'react'
import {Button} from 'react-bootstrap';

const ButtonWrapper = (props) => {

    return (
        <div className="wrapButton">
            <Button {...props}/>
        </div>
    )
};

export default ButtonWrapper;
