import React from 'react'

const BurgerButton = ( { size, color, strokeWidth, setOpenHeader } ) => {
  return (
    <svg
        className='burger-button'
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
        onClick={() => setOpenHeader((prev) => (!prev)) }
    >
        <g
            id="SVGRepo_bgCarrier"
            strokeWidth="0"
        ></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"></g>
        <g
            id="SVGRepo_iconCarrier"
        >
            <path
                d="M5 12H20"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"></path>
            <path
                d="M5 17H20"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"></path>
            <path
                d="M5 7H20"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            ></path>
        </g>
    </svg>
  )
}

export default BurgerButton