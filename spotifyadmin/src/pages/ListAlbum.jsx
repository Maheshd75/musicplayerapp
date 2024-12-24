import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
const url = 'http://127.0.0.1:8000'

const ListAlbum = () => {
   const[data,setData] = useState([])

   const fetchAlbums = async () => {
     try{
       const response = await axios.get(`${url}/api/album/`)

       if (response.data) {
        setData(response.data)
        
       }
     }catch (error){
      toast.error('Error occur')
   }
   }
   const removeAlbum = async (id)=>{
     try{
      const response = await axios.post(`${url}/api/album/remove`,{id})
     if (response.data){
      toast.success(response.data)
         await fetchAlbums()      
     }
    }catch(error){
         toast.error("Error occur")
    }
    
   }
   useEffect(()=>{
    fetchAlbums()
   },[])
  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
        <b>Image</b>
        <b>Name</b>
        <b>Description</b>
        <b>Album</b>
        <b>Action</b>
        </div>
        <div>
          {data.map((item,index)=>{
            return(
              <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                <img className='w-12' src={url+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.desc}</p>
                  
                  <input type="color"  value={item.bgColor} />
                  <p className='cursor-pointer' onClick={()=>removeAlbum(item.id)}>x</p>
              </div>
            )
          })}
        </div>

      
      
    </div>
  )
}

export default ListAlbum
