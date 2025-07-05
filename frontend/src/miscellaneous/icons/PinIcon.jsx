import React from 'react'

const PinIcon = ( { width, height, innerCircleRadius, strockWidth, strockColor } ) => {
  return (
        <svg 
            className='pin-icon-svg'
            width={width}
            height={height}
            viewBox="-1.44 -1.44 50.88 50.88"
            data-name="Layer 1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
            <path
                className="cls-1"
                d="M41,18c0,11-17,29-17,29S7,29,7,18C7,8.06,14.06,1,24,1S41,8.06,41,18Z"
                stroke={strockColor}
                strokeWidth={strockWidth}
            ></path>
            <circle
                className="cls-2"
                cx="24"
                cy="16"
                r={innerCircleRadius}
                fill="none"
                stroke={strockColor}
                strokeWidth={strockWidth}
            ></circle>       
        </svg>
  )
}

export default PinIcon