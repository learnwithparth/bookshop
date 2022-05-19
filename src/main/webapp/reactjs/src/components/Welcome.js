import React from 'react';

export default function Welcome(props) {
    const heading = "Welcome to Book Store";
    return (

            <h1>{props.heading}</h1>
            // <blockquote className="blockquote mb-0">
            //     <p>
            //         {props.quote}
            //     </p>
            //     <footer className="blockquote-footer">
            //         {props.footer}
            //     </footer>
            // </blockquote>

    );
}