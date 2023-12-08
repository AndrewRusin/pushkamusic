import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface IPlaylist{
    name: string;
    src:string
  }
export interface PlayerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    playlist:IPlaylist[];
    current_track:number;
    isPlaying:boolean;
    onPlay?: () => void;
    onPause?: () => void;
}