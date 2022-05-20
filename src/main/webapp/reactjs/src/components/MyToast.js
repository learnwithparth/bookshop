import React, {Component} from 'react';
import {Toast} from 'react-bootstrap';

export default class MyToast extends Component{
    render(){
        const toastCss = {
            position: 'fixed',
            top: '20px',
            right: '20px',
            boxShadow: '0 4xp 8xp rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }

        return (
            <div style={toastCss}>
                <Toast className={"border border-success bg-success text-white"}>
                    <Toast.header className={"bg-success text-white"} closeButton={false}>
                        <strong className={"mr-auto"}>Success</strong>
                    </Toast.header>
                    <Toast.Body>
                        Book Saved Successfully.
                    </Toast.Body>
                </Toast>
            </div>
        )
    }
}