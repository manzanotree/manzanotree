import React, { useEffect, useState } from "react";
import {
  container,
  playlist,
  track
} from "./music.module.css"

const Music = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getTracks = async () => {
      const response = await fetch(`https://api-v2.hearthis.at/kuya-manzo?type=tracks`)
      const data = await response.json()
      setTracks(data)
    }

    getTracks()
  }, [])

  const Music = () => {
    if (tracks.length <= 0) return
    return tracks.map((item, index) => {
      return (
        <li key={index} className={track}>
          <iframe 
            id={`hearthis_at_track_${item.id}`} 
            width="100%" 
            height="130" 
            src={`https://app.hearthis.at/embed/${item.id}/transparent/?hcolor=&color=&style=2&block_size=5&block_space=1&background=0&waveform=0&cover=0&autoplay=0&css=`} 
            frameborder="0" 
            allowtransparency/> 
        </li>
      )
    })
  }

  return (
    <div className={container}>
      <ul className={playlist}>
        <Music />
      </ul>
    </div>
  )
}

export default Music