
import { useContext } from 'react'
import Display from './components/Display'
import Player from './components/player'
import Sidebar from './components/sidebar'
import { PlayerContext } from './context/Playercontext'
const url = 'http://127.0.0.1:8000'

const App = () => {
  const {audioRef,track,songsData} = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      {
        songsData.length !=0
        ?<>
        <div className='h-[90%] flex'>
      <Sidebar/>
      <Display/>
      </div>
      <Player/>
        </>
        :null
      }
      
      <audio ref={audioRef} src={track?url+track.file:""} preload='auto'></audio>
    </div>
  )
}

export default App
