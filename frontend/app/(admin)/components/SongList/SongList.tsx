
'use client'
import { API } from "@/api/api";

import { Button, Filter } from "@/components"
import { ISongCategoriesResponse } from "@/interfaces/song.interface";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./SongList.module.css";
import { deleteSongItem, getSongItems, getSongItemsFilter } from "@/api/song";
import { deleteFile } from "@/api/file";
import React from "react";
import { Player } from "@/components/Player/Player";
import { IPlaylist } from "@/components/Player/Player.props";
import { ISelectItems } from "../SelectList/SelectList.props";
import { SelectList } from "../SelectList/SelectList";




export const  SongList =() => {

    const [SongItems, setSongItems] = useState<ISongCategoriesResponse[] >([])
    const [value, setValue] = useState<string[] | null >(null)
    const [playlist, setPlaylist] = useState<IPlaylist[] | null>(null)
    const [trackID, setTrackID] = useState(0)
    const [selectItem, setSelectItem] = useState<ISelectItems  | null >(null)
    const handleChange = async (val:string[] | null) => {
    
      if (val!==null) {
        setValue(prev => prev=[...val])
      }else{
        setValue(null)
        const data = await getSongItems()
       
        setSongItems(data)
      }    
    }

    (async () => {if (value) {        
        const data =   await getSongItemsFilter(value)
        setSongItems(data)
    }})();
    useEffect( () => {
        (async () => {
        const data = await getSongItems()
        data.forEach(el=>el.isSelected = false) 
        setSongItems(data)
        const playListArr = data.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})) 
     
        setPlaylist([...playListArr])
      })();
       return () => {
         // this now gets called when the component unmounts
       }; 
     }, [])
    
    async function  deleteItem(id:string, fileName:string){
        await deleteFile(fileName);
        await deleteSongItem(id);
        const itemsRefresh = await getSongItems()
        setSongItems(itemsRefresh)
    }
   function deleteSelected(id:string) {
    setSongItems(SongItems.map(song=>{
      if (song._id ===id) {
        song.isSelected = false
      }
      return song
    }))
   }  

    if (SongItems.length) {
        return (
            <div>           
            <div className={styles.top_bar}>
              <Filter onChange={handleChange}/>
              {selectItem && (<SelectList selectItem={selectItem} deleteSelected={deleteSelected}/>)} 
            </div>
            
                 <ul className={styles.song_list}>
                {SongItems.map((item,idx) => (
                   { item.isHidden && <li key ={item._id} >
                      <span className={styles.order}>{item.order}</span>
                      <span>
                        {!item.isSelected && <Button  appearance={"primary"} onClick={()=>{
                                                                                            setSelectItem({id:item._id, name:item.title})
                                                                                            item.isSelected = true}}> 
                                              + select</Button>}
                        <span onClick={()=>setTrackID(idx)}>{item.title}</span>
                      </span>
                      <span> <Button appearance="alert" onClick={async ()=>deleteItem(item._id, item.track_link)}>удалить</Button></span></li>})
                ))}      
            </ul>
           
            <div className={styles.player}>
                {playlist && (<Player playlist={playlist} current_track={trackID}/>)}
            </div>
            </div>
            
        )
    } else {
        
        return (
        <div>
            <Filter onChange={handleChange}/>
            <p>Здесь еще нет элементов</p>
        </div>
        )
    }

  }