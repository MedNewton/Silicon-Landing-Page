import * as React from "react";

type USFlagProps = {
    size?: number;
};

const USFlag = ({ size = 22 }: USFlagProps) => {
    const clipId = React.useId();
    const width = size;
    const height = Math.round(size * 0.72);
    const stripeHeight = 18 / 13;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 18"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="United States flag"
            style={{ display: "block", flexShrink: 0 }}
        >
            <defs>
                <clipPath id={clipId}>
                    <rect x="0.5" y="0.5" width="23" height="17" rx="2.5" ry="2.5" />
                </clipPath>
            </defs>
            <g clipPath={`url(#${clipId})`}>
                <rect width="24" height="18" fill="#FFFFFF" />
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
                <rect
                    x="0"
                    y="0"
                    width="11"
                    height={stripeHeight * 7}
                    fill="#3C3B6E"
                />
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

export default USFlag;
