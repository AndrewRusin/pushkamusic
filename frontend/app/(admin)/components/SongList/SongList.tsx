'use client'
import { API } from "@/api/api";
import { Filter } from "@/components";
import { ISongCategoriesResponse } from "@/interfaces/song.interface";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./SongList.module.css";
import {
  getSongItems,
  getSongItemsFilter,
} from "@/api/song";
import { Player } from "@/components/Player/Player";
import { SelectList } from "../SelectList/SelectList";
import { IPlaylist } from "@/components/Player/Player.props";
import Edit from '@/public/icons/edit.svg'
import {Preloader} from "@/components"

export const SongList = () => {
  const [songItems, setSongItems] = useState<ISongCategoriesResponse[]>([]);
  const [selectedFilterValues, setSelectedFilterValues] = useState<string[] | null>(null);
  const [playlist, setPlaylist] = useState<IPlaylist[] | null>(null);
  const [trackID, setTrackID] = useState(-1);
  const [selectItem, setSelectItem] = useState<string[] | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [originalSelectItem, setOriginalSelectItem] = useState<string[] >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [originalSongItems, setOriginalSongItems] = useState<ISongCategoriesResponse[]>([]);
  const [originalPlaylist, setOriginalPlaylist] = useState<IPlaylist[]>([]);


  const handlePlay = (trackIndex: number) => {
    setTrackID(trackIndex);
    setIsPlaying(true);
  };
const handleSelect = (itemId: string) => {
  const updatedSongItems = songItems.map(item =>
    item._id === itemId ? { ...item, isSelected: !item.isSelected } : item
  );
  setSongItems(updatedSongItems);

  const selectedItems = updatedSongItems
    .filter(el => el.isSelected)
    .map(el => el._id);

  // Объединяем selectedItems и originalSelectItem
  let mergedItems;
  if (originalSelectItem?.includes(itemId)) {
    // Если элемент уже выбран, удаляем его из списка
    mergedItems = originalSelectItem.filter(id => id !== itemId);
  } else {
    // Если элемент не выбран, добавляем его в список
    mergedItems = Array.from(new Set([...selectedItems, ...originalSelectItem]));
  }

  if (!mergedItems.length) {
    setSelectItem(null);
  } else {
    setSelectItem(mergedItems);
  }

  setOriginalSelectItem(mergedItems);
};

const handleDeleteItem = (id: string) => {
  setSelectItem((prevSelectItem) => prevSelectItem ? prevSelectItem.filter(itemId => itemId !== id) : null);
  setSongItems(prev => prev.filter(el=>el._id !==id))

};
const handleTrackID = (id: number) => {
  setTrackID(id);
  setIsPlaying(true);
};
const clear = async () => {
  try {
    setIsLoading(true)
    let response: ISongCategoriesResponse[];
    if (selectedFilterValues) {
      response = await getSongItemsFilter(selectedFilterValues);
    } else {
      response = await getSongItems(); 
    }
   
    response.forEach((el) => selectItem?.includes(el._id) ? el.isSelected = true : el);
    setSongItems(response);
    const playListArr = response.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})) 
      setPlaylist([...playListArr])
      setIsLoading(false)
  } catch (error) {
    
  }
 
};
const  showSelected = () => {
  setSongItems(prev => prev.filter(el => el.isSelected === true )); 
};
  const loadSongItems = async (select:string[] | null = selectItem) => {
    setIsLoading(true)
    try {
      const response = await getSongItems(); // Замените на свой эндпоинт
      response.forEach((el) => (el.isSelected = false));
      response.forEach((el) => select?.includes(el._id) ? el.isSelected = true : el);
      setOriginalSongItems(response) 
      setSongItems(response);
      const playListArr = response.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})) 
      setOriginalPlaylist([...playListArr])
      setPlaylist([...playListArr])
      setIsLoading(false)
    } catch (error) {
      console.error("Error loading song items:", error);
    }
    
  };

  
  const filterSongItems = async (filterValues: string[] | null) => {
    try {
      if (filterValues === null) {
        // Возвращаем оригинальное состояние, если фильтр пуст
        
        setSelectItem(originalSelectItem);
        loadSongItems(originalSelectItem);
      } else {
        setIsLoading(true)
        const response = await getSongItemsFilter(filterValues);
        response.forEach((el) => selectItem?.includes(el._id) ? el.isSelected = true : el);
        setSongItems(response);
        
        const filterSelected = response.filter(el => el.isSelected === true ).map(el => el._id);
      
        
        const playListArr = response.map(el=>({src:API.uploadSrc+el.track_link, name:el.title}));
        setPlaylist([...playListArr]);
        setIsLoading(false)
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
      const searchArr = originalSongItems.filter((el) =>
        el.title.toLowerCase().includes(song.toLowerCase())
      );
      searchArr.forEach((el) => selectItem?.includes(el._id) ? el.isSelected = true : el);
      const searchPlaylist = originalPlaylist?.filter((el) =>
        el.name.toLowerCase().includes(song.toLowerCase())
      );
  
      setSongItems(searchArr);
      if (searchPlaylist) {
        setPlaylist(searchPlaylist);
      }
     
    } else {
      // Возвращаем исходное состояние, когда строка поиска пуста
     setSongItems(originalSongItems)
    }
  };

  useEffect(() => {
    loadSongItems();
  }, []);


  return (
    <div>
      <Preloader isLoading={isLoading} />
      <div className={styles.top_bar}>
        <Filter onChange={handleFilterChange} totalSong = {songItems.length}/>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Поиск"
          onChange={(e) => searchSong(e.target.value)}
        />
        <label  className={styles.hiddenSong} ><input type="checkbox" onChange={
          (e)=>setSongItems(prev=> e.target.checked ? [...prev.map(el=>({...el, isHidden: !e.target.checked}))] : originalSongItems)
          }/>скрытые</label>
        <h1>{}</h1>
        {selectItem && (
          <SelectList
            showSelected={ showSelected}
            selectItem={selectItem}
            clear={clear}
            onDeleteItem={handleDeleteItem}
            onTrackId={handleTrackID}
          />
        )}
      </div>

      <ul className={styles.song_list}>
        <span>Песен {songItems?songItems.filter(el=>el.isHidden===false).length:''} из {originalSongItems.length}</span>
        {songItems.map((item, idx) =>
          !item.isHidden ? (
            <li key={item._id}>
                <span onClick={() => handlePlay(idx)} className={styles.song_name}>{item.title}</span>
              <span className={styles.right_side}>
                <Link href={"/dashboard/edit_song_item/" + item._id}><Edit/></Link>{" "}
                  <span
                    className = {item.isSelected ? styles.active : styles.not_active}
                    aria-disabled = {item.isSelected}
                    onClick = {() => handleSelect(item._id)}
                  >
                
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