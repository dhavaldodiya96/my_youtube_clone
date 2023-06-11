import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const  VideoCoatiner = () => {

  const [video,setVideo]= useState([])

useEffect(()=>{
   getVideos();
},[])

const getVideos = async ()=>{

  const data = await fetch(YOUTUBE_VIDEO_API)
  const jasondata = await data.json()
  setVideo(jasondata.items)
  console.log("......",jasondata.items)
}

  return (
    <div className='flex flex-wrap'>
      {video.map((items)=> 
      <Link to={"/watch?v=" + items.id}><VideoCards key={items.id} info={items}/></Link>)}
     
    </div>
  )
}
export default VideoCoatiner
