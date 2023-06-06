import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationButtons = () => {
    return (
        <div className="container">
            <Link to="/register">
                <button type="button" className="btn btn-primary m-2">Register</button>
            </Link>
            <Link to="/summary">
                <button type="button" className="btn btn-secondary m-2">Summary</button>
            </Link>
        </div>
    );
}

export default NavigationButtons;
