import * as React from "react";

type USFlagProps = {
    size?: number;
};

const USFlag = ({ size = 22 }: USFlagProps) => {
    const stripeHeight = 24 / 13;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="United States flag"
        >
            <defs>
                <clipPath id="us-flag-clip">
                    <circle cx="12" cy="12" r="11" />
                </clipPath>
            </defs>
            <g clipPath="url(#us-flag-clip)">
                <rect width="24" height="24" fill="#FFFFFF" />
                {[0, 2, 4, 6, 8, 10, 12].map((idx) => (
                    <rect
                        key={idx}
                        x="0"
                        y={idx * stripeHeight}
                        width="24"
                        height={stripeHeight}
                        fill="#B22234"
                    />
                ))}
                <rect x="0" y="0" width="11" height={stripeHeight * 7} fill="#3C3B6E" />
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

export default USFlag;
