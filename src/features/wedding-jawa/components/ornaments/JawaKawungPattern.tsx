import React from "react";

interface Props {
  className?: string;
}

const JawaKawungPattern: React.FC<Props> = ({
  className = "",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="kawung-pattern"
          width="70"
          height="70"
          patternUnits="userSpaceOnUse"
        >
          <ellipse
            cx="35"
            cy="12"
            rx="10"
            ry="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          <ellipse
            cx="35"
            cy="58"
            rx="10"
            ry="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          <ellipse
            cx="12"
            cy="35"
            rx="22"
            ry="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          <ellipse
            cx="58"
            cy="35"
            rx="22"
            ry="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          <circle
            cx="35"
            cy="35"
            r="3"
            fill="currentColor"
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#kawung-pattern)"
      />
    </svg>
  );
};

export default JawaKawungPattern;