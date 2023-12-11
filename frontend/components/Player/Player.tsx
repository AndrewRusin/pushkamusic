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
  const audioPlayerRef = useRef<AudioPlayer>(null);
  useEffect(() => {
    setShouldAutoPlay(isPlaying);
    
  }, [playlist]);
  useEffect(() => {
    if (isPlaying && audioPlayerRef.current) {
      console.log('playing')
      audioPlayerRef.current.audio.current?.play();
      onPlay?.(); // Сигнализируем, что воспроизведение началось
    } else if (!isPlaying && audioPlayerRef.current) {
      audioPlayerRef.current.audio.current?.pause();
      onPause?.(); // Сигнализируем, что воспроизведение приостановлено
    }
  }, [isPlaying, onPlay, onPause]);

  const handlePlay = () => {
   
    // Воспроизведение аудио после пользовательского взаимодействия
    if (audioPlayerRef.current) {
      audioPlayerRef.current.audio.current?.play()
    }
  };

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
        ref={audioPlayerRef}
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
        onPlay={ handlePlay}
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
