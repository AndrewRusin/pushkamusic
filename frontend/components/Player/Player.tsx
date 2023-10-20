
'use client'

import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './Player.module.css'
import { PlayerProps } from './Player.props';




export const Player = ({ playlist , current_track,...props}:PlayerProps ) => {
  

  const [currentTrack, setTrackIndex] = useState<number>(0)

  const handleClickNext = () => {
      console.log('click next')
        setTrackIndex((currentTrack: number) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };
  
  const handleEnd = () => {
    console.log('end')
    setTrackIndex((currentTrack: number) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
  }
  if (playlist) {
    
 
  return (
        <div>    
          <AudioPlayer
          className={style.custom}
          src={playlist[current_track || currentTrack].src}
          header={playlist[current_track || currentTrack].name}
          showSkipControls
          onClickNext={handleClickNext}
          onEnded={handleEnd}
          // Try other props!
        />
      </div>

    );
  }
}




