import React from 'react'

const ToastFailure = ( { message="Success!", timer=4000 } ) => {
  const animationDuration = `${timer}ms`;
  return (
    <div 
        className='toast-failure toast'
        style={{
            animationDuration,
        }}
    >
        {message}
    </div>
  )
}

export default ToastFailure