import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";


const Headar = () => {

  const [searchQuery,setSearchQuery] = useState("")
  const [suggestion,setSuggestion] = useState([])
  console.log("....",searchQuery)

  useEffect(()=>{

    const data = setTimeout(()=>{
      getSearch()
    },200) 

    return (()=>{
      clearTimeout(data)
    })

  },[searchQuery])

  const getSearch = async()=>{
   
    const api = await fetch(YOUTUBE_SEARCH_API + searchQuery )
    const youtube = await api.json()
    console.log("yyy..",youtube)
    setSuggestion(youtube[1])

  }
  
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
     dispatch(toggleMenu()); 
  }

  return (
    <>
    <div className='grid grid-flow-col shadow-lg' > 
    <div className='flex col-span-1'>
      <img 
        className='h-8 my-3'
        onClick = { () => handleToggleMenu() } 
        alt='Menu' src= "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png" />
      <img
        className='h-14 '
        alt='Yotube-logo' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'/>
    </div>
    <div className='my-4 col-span-10 ml-40 '>
      <input 
      className='border border-gray-400 w-1/2 p-1 rounded-l-full'
      value={searchQuery}
      type='text' 
      onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <button className='border p-1 rounded-r-full border-gray-400'>Search</button>
      <div className="w-[34rem] border border-gray-200 rounded-lg ">
        <ul >
          {suggestion.map((e)=><li key={e} className=" border-gray-200 hover:bg-slate-200 m-2">{e}</li>)}
        </ul>
      </div>
    </div>
    <div className='col-span-1'>
      <img alt='icon' 
      className='h-6 my-3 col'
      src='https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'/>
    </div>
    </div>
    </>
  )
}

export default Headar;
