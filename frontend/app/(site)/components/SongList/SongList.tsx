
'use client'
import { API } from "@/api/api";

import { Button, Filter } from "@/components"
import { ISongCategoriesResponse } from "@/interfaces/song.interface";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./SongList.module.css";
import {  getSongItems, getSongItemsFilter } from "@/api/song";
import React from "react";
import { Player } from "@/components/Player/Player";
import { IPlaylist } from "@/components/Player/Player.props";
import { SongsItemProps } from "./SongList.props";





export const  SongList =({songs}:SongsItemProps) => {

    const [trackID, setTrackID] = useState(0)

    if (songs.length) {
        return (
            <div>           
                 <ul className={styles.song_list}>
                {songs.map((item,idx) => (
                    <li key ={item._id} >
                     <span onClick={()=>setTrackID(idx)}>{item.title}</span>
                   </li>
                ))}       
            </ul>
           
            <div className={styles.player}>
               <Player playlist={songs.map(el=>({src:API.uploadSrc+el.track_link, name:el.title}))} current_track={trackID}/>
            </div>
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