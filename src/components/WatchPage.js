

import React from 'react'
import { useSearchParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { closeMenu } from '../utils/appSlice'


const WatchPage = () => {
// const dispatch = useDispatch();
//    useEffect(()=>{
//     dispatch(closeMenu())
//    },[])
const [searchParams] = useSearchParams()
console.log(searchParams.get("v"))
  return (
    <div>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default WatchPage
