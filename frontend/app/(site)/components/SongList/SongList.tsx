
'use client'
import { API } from "@/api/api";
import Info from '@/public/icons/information.svg'
import { SongsInfo } from "@/components"
import { useEffect, useState } from "react";
import styles from "./SongList.module.css";
import React from "react";
import { Player } from "@/components/Player/Player";
import { SongsItemProps } from "./SongList.props";
import { Transition } from "react-transition-group";


interface InfoSong{
    name:string,
    text:string,
    params:string[]
}



export const  SongList =({songs}:SongsItemProps) => {

    const [trackID, setTrackID] = useState(-1)
    const [infoSong, setInfoSong] = useState<InfoSong | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    
    
      const handlePlay = (trackIndex: number) => {
        setTrackID(trackIndex);
        setIsPlaying(true);

      };
    
      useEffect(() => {
        if (!!infoSong ) {
          
          document.body.classList.add('no-overflow');
        } else {
          document.body.classList.remove('no-overflow');
        }
        return () => {
          document.body.classList.remove('no-overflow');
        };
      }, [infoSong]);
        

        if (songs.length) {
            return (
                <div style={infoSong ? {overflow:"hidden"} : {}}>        
                     <ul className={styles.song_list}>
                    {songs.map((item,idx) => (
                        <li key ={item._id} >
                            <span onClick={() => handlePlay(idx)}>{item.title}</span>
                            <div className={styles.right_side}>
                                    <span className={styles.icons} onClick={()=>setInfoSong({name:item.title,text:item.songsText, params:item.params})} ><Info/></span>
                                    <a className={styles.price_btn} href={`https://wa.me/905058907481/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D1%82%D1%8C%20%D1%86%D0%B5%D0%BD%D1%83%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8%20%20«${item.title}»`}  target='_blank'>Цена</a>
                            </div>
                        </li>
                ))}       
            </ul>
           
            <div className={styles.player}>
                
            <Player
           
                playlist={songs.map((el) => ({
                    src: API.uploadSrc + el.track_link,
                    name: el.title,
                }))}
                current_track={trackID}
                isPlaying={isPlaying}
                onPlay={() => {
                  setIsPlaying(true)
                  
                }}
                onPause={() => {
                  setIsPlaying(false)
                
                }}
                />
            </div>
            
                <Transition in={!!infoSong} timeout={50} unmountOnExit={true}>
                {(state) => (
                    <>
                    <div className={`blured ${state === 'entered' ? 'blur-entered' : 'blur-exit'}`}></div>
                    <SongsInfo
                        closeInfo={() => setInfoSong(null)}
                        name={infoSong && infoSong.name}
                        params={infoSong &&  infoSong.params}
                        text={infoSong &&  infoSong.text}
                        className={`up_info ${state === 'entered' ? 'up_info-entered' : 'down_info'}`}
                    />
                    </>
                )}
            </Transition>       
            </div>        
    
        )
        
    } else {
        
        return (
        <div>
            <p>Здесь еще нет элементов</p>
        </div>
        )
    }

  }