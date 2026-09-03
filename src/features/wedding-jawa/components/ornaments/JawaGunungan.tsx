import React from "react";

interface Props {
  className?: string;
}

const JawaGunungan: React.FC<Props> = ({
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 160 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="
          M80 8
          C72 32 55 48 43 70
          C27 98 20 130 24 161
          C28 192 49 215 80 232
          C111 215 132 192 136 161
          C140 130 133 98 117 70
          C105 48 88 32 80 8Z
        "
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="
          M80 29
          C74 49 63 63 55 79
          C44 101 39 124 41 149
          C44 171 57 191 80 207
          C103 191 116 171 119 149
          C121 124 116 101 105 79
          C97 63 86 49 80 29Z
        "
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M80 47V195"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M80 74C67 87 60 101 57 119"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M80 74C93 87 100 101 103 119"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M80 105C68 119 62 135 61 153"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M80 105C92 119 98 135 99 153"
        stroke="currentColor"
        strokeWidth="1"
      />

      <circle
        cx="80"
        cy="135"
        r="14"
        stroke="currentColor"
        strokeWidth="1"
      />

      <circle
        cx="80"
        cy="135"
        r="5"
        fill="currentColor"
      />

      <path
        d="M51 165C63 158 71 157 80 163"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M109 165C97 158 89 157 80 163"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
};

export default JawaGunungan;