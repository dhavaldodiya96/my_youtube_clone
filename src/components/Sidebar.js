import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

   
  
  return !isMenuOpen ? null : (
    <>
    <div className='shadow-lg '>
      <h1 className='font-bold mx-3 mt-3'>Subsrciption</h1>
      <ul className='mx-3'>
        <li>Music</li>
        <li>Videos</li>
        <li><Link to="/">Home</Link></li>
        <li>Javascript</li>
        <li>News</li>
      </ul>
      <h1 className='font-bold mx-3 mt-3'>Subsrciption</h1>
      <ul className='mx-3'>
        <li>Music</li>
        <li>Videos</li>
        <li>Home</li>
        <li>Javascript</li>
        <li>News</li>
      </ul>
      <h1 className='font-bold mx-3 mt-3'>Subsrciption</h1>
      <ul className='mx-3'>
        <li>Music</li>
        <li>Videos</li>
        <li>Home</li>
        <li>Javascript</li>
        <li>News</li>
      </ul>
    </div>
    </>
  )
  
}

export default Sidebar;
