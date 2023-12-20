'use client'

import { useEffect, useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { PlayerProps } from './Player.props';
import Play from '@/public/icons/play.svg';
import Pause from '@/public/icons/pause.svg';
import Forward from '@/public/icons/forward.svg'


export const Player = ({
  playlist,
  current_track,
  isPlaying,
  onPlay,
  onPause,
  ...props
}: PlayerProps) => {
  const [currentTrack, setTrackIndex] = useState<number>(0);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  useEffect(() => {
    setShouldAutoPlay(isPlaying);
  }, [shouldAutoPlay]);
 

  useEffect(() => {
    setTrackIndex(current_track);
  }, [current_track]);

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleClickPrev = () => {
    setTrackIndex((currentTrack) =>
      currentTrack > 0 ? currentTrack - 1 : playlist.length - 1
    );
  }
  
  return (
   
      <AudioPlayer
        className="custom_player"
        src={playlist[currentTrack]?.src}
        autoPlay={shouldAutoPlay}
        customAdditionalControls={
          [
            <div>{playlist[currentTrack]?.name}</div>
          ]
        }
        showSkipControls
        onClickNext={handleClickNext}
        onEnded={handleEnd}
        onClickPrevious = {handleClickPrev}
        showJumpControls={false}
        onPlay={() => {
          onPlay?.(); 
        }}
        autoPlayAfterSrcChange = {isPlaying}
        onPause={() => {
          onPause?.(); 
        }}
        customIcons={{
          play: <Play/>,
          pause:<Pause/>,
          next:<Forward/>,
          previous:<Forward/>,
        }}
      />

  );
};
