import React from 'react';
import './Footer.css';

export const Footer = props => {
    return(
        <footer className="footer">
            <div>
                {props.footer}
            </div>
            <div>
                {props.date}
            </div>
        </footer>
    );
}
