 
 import React from 'react'
 
 const VideoCards = ({info}) => {
  console.log("...info",info);
  const {statistics,snippet} = info;
  // const {viewCount} = statistics;
  const {channelTitle,thumbnails,title} = snippet;

  
   
   return (
     <div className='w-72 p-2 m-2 shadow-lg '>
       <img className='rounded-lg ' alt='videoes' src={thumbnails.high.url }/>
       <ul>
         <li className='font-bold py-2'>{title}</li>
         <li>{channelTitle}</li>
         <h1>{statistics.viewCount} viewCount</h1>
       </ul>

     </div>
   )
 }
 
 export default VideoCards
 

 
