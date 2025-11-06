import React from "react";

interface WaveLineProps {
  color?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const WaveLine: React.FC<WaveLineProps> = ({
  color = "#ffffff",
  width = "100%",
  height = "100px",
  className = "",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1389 134.92"
      width={width}
      height={height}
      fill="none"
    >
      <path
        d="M-.11,1.43C.16.12.73.07,1.79.03c11.06-.01,78.38,0,168.14,0,215.53,0,538.16.02,572.33-.03,24.89.44,52.02,19.59,65.98,41.15,9.43,14.2,15.81,32,24.69,46.43,9.48,15.61,24.14,30.14,39.89,38.82,4.97,2.71,10.39,4.95,15.69,6.42,5.2,1.4,8.15,1.84,12.06,2.17.03,0-.05,0-.2,0-.12,0-.28,0-.48,0-144.24-.23-850.88.48-899.55-.27-.64-.5-.7-2.32-.72-7.93C.42,101.89-1.28,29.81-.11,1.47"
        stroke={color}
        strokeMiterlimit={10}
      />
    </svg>
  );
};

export default WaveLine;
