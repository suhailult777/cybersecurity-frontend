import React from 'react';

const Footer = () => {
    return (
        <div className="fixed bottom-4 left-4 flex items-center space-x-2 text-gray-400">
            {/* <svg
                viewBox="0 0 50 50"
                className="h-8 w-8"
                fill="currentColor"
            >
                <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 42c-10.5 0-19-8.5-19-19S14.5 6 25 6s19 8.5 19 19-8.5 19-19 19z" />
                <path d="M25 14c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2s2-.9 2-2V16c0-1.1-.9-2-2-2z" />
                <path d="M25 38c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg> */}
            <span className="text-sm font-light tracking-wide">
                <span className="font-medium">© 2024 LLM.</span>{' '}
                All rights reserved.
            </span>
        </div>
    );
};

export default Footer;