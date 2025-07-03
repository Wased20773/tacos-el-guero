import React from 'react'

const ClockIcon = ( { width, height, strockWidth, strockColor }) => {
  return (
    <svg
        className="clock-icon-svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={strockColor}
        strokeWidth={strockWidth}
        xmlns="http://www.w3.org/2000/svg">
        <circle
            cx="12"
            cy="12"
            r="10.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></circle>
        <path
            d="M12 6V12L16.5 16.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </svg>
  )
}

export default ClockIcon