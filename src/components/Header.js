import React from 'react';
import './Header.css';

export const Header = props => {
    return(
        <header className="header">
            {props.name}
        </header>
    );
}
