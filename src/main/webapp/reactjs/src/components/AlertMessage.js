import React, {useState} from 'react';
import {Alert, Button} from "react-bootstrap";

function AlertMessage(props) {
    // const [show, setShow] = useState(true);
        return (
            // props.alert && <Alert variant={props.alert.type} onClose={() => setShow(false)} dismissible>
            props.alert && <Alert variant={props.alert.type}  dismissible>
                {props.alert.message}
            </Alert>
        );
}

export default AlertMessage;