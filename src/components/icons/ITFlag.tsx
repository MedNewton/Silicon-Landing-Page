import * as React from "react";

type ITFlagProps = {
    size?: number;
};

const ITFlag = ({ size = 22 }: ITFlagProps) => {
    const clipId = React.useId();
    const width = size;
    const height = Math.round(size * 0.72);

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 18"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Italian flag"
            style={{ display: "block", flexShrink: 0 }}
        >
            <defs>
                <clipPath id={clipId}>
                    <rect x="0.5" y="0.5" width="23" height="17" rx="2.5" ry="2.5" />
                </clipPath>
            </defs>
            <g clipPath={`url(#${clipId})`}>
                <rect x="0" y="0" width="8" height="18" fill="#009246" />
                <rect x="8" y="0" width="8" height="18" fill="#FFFFFF" />
                <rect x="16" y="0" width="8" height="18" fill="#CE2B37" />
            </g>
            <rect
                x="0.5"
                y="0.5"
                width="23"
                height="17"
                rx="2.5"
                ry="2.5"
                fill="none"
                stroke="rgba(15, 27, 60, 0.12)"
                strokeWidth="1"
            />
        </svg>
    );
};

export default ITFlag;
