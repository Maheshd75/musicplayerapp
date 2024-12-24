
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { IoPlay } from "react-icons/io5";
import { MdSkipNext } from "react-icons/md";
import { SlLoop } from "react-icons/sl";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { HiMiniQueueList } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { SlVolume2 } from "react-icons/sl";
import { CgMiniPlayer } from "react-icons/cg";
import { ImEnlarge2 } from "react-icons/im";
import { useContext } from 'react';
import { IoPause } from "react-icons/io5";
import { PlayerContext } from '../context/Playercontext';
const url = 'http://127.0.0.1:8000'
const Player = () => {
    const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext)
  return ( track?(
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
      <img className='w-12' src={url+track.image} alt=''/>
      <div>
        <p>{track.name}</p>
        <p>{track.desc.slice(0,12)}</p>
      </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
            <FaShuffle className='w-4 cursor-pointer'/>
            <MdSkipPrevious onClick={previous} className='w-4   cursor-pointer'/>
           {playStatus?<IoPause onClick={pause} className='w-4 cursor-pointer'/>:<IoPlay onClick={play} className='w-4 cursor-pointer'/>}
            
            
            <MdSkipNext onClick={next} className='w-4 cursor-pointer'/>
            <SlLoop className='w-4 cursor-pointer'/>



        </div>
        <div className='flex items-center gap-5'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                <hr ref={seekBar}  className='h-1 border-none w-0 bg-green-500 rounded-full'/>


            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div> 
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <AiOutlinePlaySquare className='w-4'/>
        <TbMicrophone2 className='w-4'/>
        <HiMiniQueueList className='w-4'/>
        <LuMonitorSpeaker className='w-4'/>
        <SlVolume2 className='w-4'/>


        <div className='w-20 bg-slate-50 h-1 rounded'> 

        </div>
            <CgMiniPlayer className='w-4'/>
            <ImEnlarge2 className='w-4'/>

        

      </div>
    
    </div>
    ) : null
  )
}

export default Player
