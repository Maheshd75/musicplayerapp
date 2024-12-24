
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
const Sidebar = () => {
   const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full  p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=> navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer' >
          <MdHomeFilled  className='w-6 h-6'/>
          <p className='font-bold'>Home</p>
        </div>
        
        <div className='flex items-center gap-3 pl-8 cursor-pointer' >
          <FaSearch className='w-6 h-6'/>
          <p className='font-bold'>search</p>
        </div>
      </div>
       <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <RiStackFill className='w-8 h-8'/>
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <FaArrowRight className='w-5 h-5'/>
             <FaPlus className='w-5 h-5'/>
          </div>

        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
         <h1>Create our first playlist</h1>
         <p className='font-light'>its easy we will help you</p>
         <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
         </div>
         <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
         <h1>Lets find podcasts to follow</h1>
         <p className='font-light'>we ll keep ypu update on new update</p>
         <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
         </div>
       </div>
    </div>
  )
}

export default Sidebar
