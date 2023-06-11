import React from 'react'
import Button from './Button'

const ButtonList = () => {

const list = ["news","Gaming","Sport","Cooking","Music","Dhoni News","Traveling","Cricet","Music",""]

  return (
    <div className='flex'>
      {
        list.map( ( item ) => <Button name={item} /> )
      }
    </div>
  )
}

export default ButtonList
