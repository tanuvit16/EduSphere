import React from 'react'
import './VedioPlayer.css'
import vid from '../../assets/vid.mp4'
import { useRef } from 'react'

const VedioPlayer = ({playState, setPlayState} ) => {
const player= useRef();
const closePlayer=(e)=>{
if(e.target===player.current){
  setPlayState(false);
}
}

  return (
    <div className={`video-player ${playState? ' ': 'hide'}`} ref={player}
    onClick={closePlayer}>
      <video src={vid} autoPlay muted controls></video>
    </div>
  )
}

export default VedioPlayer


//e.target === player.current is the correct approach because player.current references the DOM element itself.
//e.target === player will not work because player is a reference object, not the DOM element.
