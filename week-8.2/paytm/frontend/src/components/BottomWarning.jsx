import React from 'react'
import { Link } from 'react-router-dom';

const BottomWarning = ({ lable, buttonText, to }) => {
    return (
        <div>
            <span className="text-sm py-2">{lable}</span>
            <Link className="underline text-sm" to={to}>
                {buttonText}
            </Link>
        </div>
    );
};

export default BottomWarning