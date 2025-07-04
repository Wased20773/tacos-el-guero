import React from 'react'

const ToastSuccess = ( { message="Success!", timer=4000 } ) => {
  const animationDuration = `${timer}ms`;
  return (
    <div 
        className='toast-success toast'
        style={{
            animationDuration,
        }}
    >
        {message}
    </div>
  )
}

export default ToastSuccess