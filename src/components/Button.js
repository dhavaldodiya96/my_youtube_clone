import React from 'react'

const Button = ( props ) => {

  return (
    <div>
      <button className='bg-gray-100 px-2 m-4'>{props.name}</button>
    </div>
  )
}

export default Button
