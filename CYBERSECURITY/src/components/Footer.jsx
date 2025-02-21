import React from 'react';

const Footer = () => {
    return (
        <div className="fixed bottom-4 left-4 flex items-center space-x-2 text-gray-400">
            <img
                src="logo.jpg"
                alt="Logo"
                className="h-8 w-8"
            />
            <span className="text-sm font-light tracking-wide">
                <span className="font-medium">© 2024 IIMA.</span>{' '}
                All rights reserved.
            </span>
        </div>
    );
};

export default Footer;