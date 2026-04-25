import * as React from "react";

type ITFlagProps = {
    size?: number;
};

const ITFlag = ({ size = 22 }: ITFlagProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Italian flag"
        >
            <defs>
                <clipPath id="it-flag-clip">
                    <circle cx="12" cy="12" r="11" />
                </clipPath>
            </defs>
            <g clipPath="url(#it-flag-clip)">
                <rect x="0" y="0" width="8" height="24" fill="#009246" />
                <rect x="8" y="0" width="8" height="24" fill="#FFFFFF" />
                <rect x="16" y="0" width="8" height="24" fill="#CE2B37" />
            </g>
            <circle
                cx="12"
                cy="12"
                r="11"
                fill="none"
                stroke="rgba(15, 27, 60, 0.12)"
                strokeWidth="1"
            />
        </svg>
    );
};

export default ITFlag;
