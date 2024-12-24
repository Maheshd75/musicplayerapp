import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import {  assests } from "../assets/assests"
import { useContext, useEffect, useState } from "react"
import { PlayerContext } from "../context/Playercontext"
const url = 'http://127.0.0.1:8000'

const DisplayAlbum = (album) => {
   const {id} = useParams()
  const[albumData,setAlbumData]=useState("")
   const {playWithId,albumsData,songsData} = useContext(PlayerContext)
   
   useEffect(()=>{
    albumsData.map((item)=>{
      if (item.id==id) {
        setAlbumData(item)
        
      }
    })
   },[])
   return (albumData?(
    <>
        <Navbar/>
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
          <img className="w-48 rounded" src={url+album.image} alt="" />
        <div className="flex flex-col"> 
         <p>Playlist</p>
         <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>

         <h4>{album.desc}</h4>
         <p className="mt-1">
            <img  className="inline-block w-5" src={assests.spotify_logo} alt="" />
            <b>Spotify</b>
            1,323,154 likes
            <b>50 songs,</b>
            about 2 hr 30 min

         </p>
        </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
             <p><b className="mr-4">#</b>Title</p>
              <p>Album</p>
              <p className="hidden sm:block">Date Added</p>
              <img className="m-auto w-4" src="" alt="" />
             </div>
              <hr />
              {songsData.filter((item)=>item.album === albumData.name).map((item,index)=>(
                <div onClick={()=>playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                   <p className="text-white">
                  <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                  <img className="inline w-10 mr-5" src={url+item.image} alt="" />
                 {item.name}</p>
                 <p className="text-[15px]">{item.album}</p>
                <p className="text-[15px] hidden sm:block">5 days ago</p>
                <p className="text-[15px] text-center">{item.duration}</p>
                </div>
                ))}
        
      
    </>):null
  )
}

export default DisplayAlbum
