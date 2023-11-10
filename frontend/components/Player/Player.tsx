'use client'

import { useEffect, useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { PlayerProps } from './Player.props';

export const Player = ({ playlist, current_track, ...props }: PlayerProps) => {
  const [currentTrack, setTrackIndex] = useState<number>(0);
  const audioPlayerRef = useRef<AudioPlayer>(null);

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
    <div>    
      <AudioPlayer
        className="custom_player"
        src={playlist[currentTrack].src}
        header={playlist[currentTrack].name}
        showSkipControls
        onClickNext={handleClickNext}
        onEnded={handleEnd}
        onClickPrevious = {handleClickPrev}
        showJumpControls={false}
      />
    </div>
  );
};
