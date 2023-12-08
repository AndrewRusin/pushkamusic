'use client'
import { API } from "@/api/api";

import { Filter } from "@/components";
import { ISongCategoriesResponse } from "@/interfaces/song.interface";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./SongList.module.css";
import {
  deleteSongItem,
  getSongItems,
  getSongItemsFilter,
} from "@/api/song";
import { deleteFile } from "@/api/file";
import { Player } from "@/components/Player/Player";
import { ISelectItems } from "../SelectList/SelectList.props";
import { SelectList } from "../SelectList/SelectList";
import { IPlaylist } from "@/components/Player/Player.props";
import Edit from '@/public/icons/edit.svg'
import AddToSelect from '@/public/icons/add_song.svg'
import SongItems from "../../dashboard/song_items/page";

export const SongList = () => {
  const [songItems, setSongItems] = useState<ISongCategoriesResponse[]>([]);
  const [selectedFilterValues, setSelectedFilterValues] = useState<string[] | null>(null);
  const [playlist, setPlaylist] = useState<IPlaylist[] | null>(null);
  const [trackID, setTrackID] = useState(0);
  const [selectItem, setSelectItem] = useState<string[] | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = (trackIndex: number) => {
    setTrackID(trackIndex);
    setIsPlaying(true);
  };
 const handleSelect =(itemId: string) => {
    const updatedSongItems = songItems.map(item =>
      item._id === itemId ? { ...item, isSelected: !item.isSelected } : item
    );
    setSongItems(updatedSongItems);
    const selectedItems = updatedSongItems.filter(el => el.isSelected === true).map(el => el._id);
    if (!selectedItems.length) {
      setSelectItem(null)
    } else {
      setSelectItem(selectedItems);
    }
};


const clear = async () => {
  try {
    const response = await getSongItems(); 
    response.forEach((el) => selectItem?.includes(el._id) ? el.isSelected = true : el);
    setSongItems(response);
  } catch (error) {
    
  }
 
};
const  showSelected = () => {
  setSongItems(prev => prev.filter(el => el.isSelected === true )); 
};
  const loadSongItems = async () => {
    try {
      const response = await getSongItems(); // Замените на свой эндпоинт
      response.forEach((el) => (el.isSelected = false));
      setSongItems(response);
      const playListArr = response.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})) 
      setPlaylist([...playListArr])
    } catch (error) {
      console.error("Error loading song items:", error);
    }
  };
  useEffect(() => {
    console.log(songItems)
  }, [songItems])
  
  const filterSongItems = async (filterValues: string[] | null) => {
    try {
      if (filterValues === null) {
        loadSongItems();
      } else {
        const response = await getSongItemsFilter(filterValues);
        response.forEach((el) => selectItem?.includes(el._id) ? el.isSelected = true : el);
        setSongItems(response);
        const playListArr = response.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})) 
        setPlaylist([...playListArr])
      }
    } catch (error) {
      console.error("Error filtering song items:", error);
    }
  };

  const handleFilterChange = (selectedValues: string[] | null) => {
    setSelectedFilterValues(selectedValues);
    filterSongItems(selectedValues);
  };




  const searchSong = (song: string) => {
    if (song.length) {
      const searchArr = songItems.filter((el) =>
        el.title.toLowerCase().includes(song.toLowerCase())
      );
      if (playlist && playlist.length>0) {
        const searchPlaylist: IPlaylist[]  = playlist.filter((el) =>
        el.name.toLowerCase().includes(song.toLowerCase())
      );
       setPlaylist([...searchPlaylist])
      }
      
      setSongItems(searchArr);
    } else {
      loadSongItems();
    }
  };

  useEffect(() => {
    loadSongItems();
  }, []);

  return (
    <div>
      <div className={styles.top_bar}>
        <Filter onChange={handleFilterChange} totalSong = {songItems.length}/>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Поиск"
          onChange={(e) => searchSong(e.target.value)}
        />
        <h1>{}</h1>
        {selectItem && (
          <SelectList
            showSelected={ showSelected}
            selectItem={selectItem}
            clear={clear}
          />
        )}
      </div>

      <ul className={styles.song_list}>
        <span>Песен {songItems.length}</span>
        {songItems.map((item, idx) =>
          !item.isHidden ? (
            <li key={item._id}>
                <span onClick={() => handlePlay(idx)} className={styles.song_name}>{item.title}</span>
              <span className={styles.right_side}>
                <Link href={"/dashboard/edit_song_item/" + item._id}><Edit/></Link>{" "}
                  <span
                    className = {item.isSelected ? styles.added : ' '}
                    aria-disabled = {item.isSelected}
                    onClick = {() => handleSelect(item._id)}
                  >
                    <AddToSelect  /> 
                  </span>
              </span>
            </li>
          ) : null
        )}
      </ul>

      <div className={styles.player}>
        {playlist?.length && <Player
                playlist={songItems.map((el) => ({
                    src: API.uploadSrc + el.track_link,
                    name: el.title,
                }))}
                current_track={trackID}
                isPlaying={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                />}
      </div>
    </div>
  );
};
