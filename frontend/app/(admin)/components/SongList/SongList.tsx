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
  const [hiddenChecked, setHiddenChecked] = useState<boolean>(false);



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
  

  if (!mergedItems.length ) {
    setSelectItem(null);
  } else {
    setSelectItem(mergedItems);
  }

  // setOriginalSelectItem(mergedItems);
  setIsPlaying(false);
  // const pauseBtn = document.querySelector('.rhap_play-pause-button') as HTMLButtonElement;
  // if (pauseBtn) {
  //   pauseBtn.click();
  // }
};

const handleDeleteItem = (id: string) => {
  setSelectItem((prevSelectItem) => prevSelectItem ? prevSelectItem.filter(itemId => itemId !== id) : null);
  setSongItems(prev => prev.filter(el=>el._id !==id))

};

useEffect(() => {
  if (!!!songItems.length && !!!selectedFilterValues) {
    setSongItems(originalSongItems)
  }
}, [songItems])


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
const clearAllSelected= async () => {
  try {
    if (selectedFilterValues) {
      setIsLoading(true)
      let response: ISongCategoriesResponse[] = await getSongItemsFilter(selectedFilterValues);
      setSongItems(response);
      setIsLoading(false)
    } else {
      setSongItems(originalSongItems)
    }   
    setSelectItem(null);
    setHiddenChecked(false); 
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
      response.filter(el=>el.params.includes('archive')).forEach(item => item.isArchive = true )
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
       
        setSelectItem(selectItem);
        loadSongItems(selectItem);
      } else {
        setIsLoading(true)
        const response = await getSongItemsFilter(filterValues);
        response.forEach((el) => {selectItem?.includes(el._id) ? el.isSelected = true : el});
        if (!filterValues.includes('archive')) {
          response.filter(el=>el.params.includes('archive')).forEach(item => item.isArchive = true )
        } 
        
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
        const lowercasedInput = song.toLowerCase();

        const searchArr = originalSongItems.filter((el) =>
            el.title.toLowerCase().startsWith(lowercasedInput)
        );
        searchArr.forEach((el) => selectItem?.includes(el._id) ? el.isSelected = true : el);

        const searchPlaylist = originalPlaylist?.filter((el) =>
            el.name.toLowerCase().startsWith(lowercasedInput)
        );

        setSongItems(searchArr);
        if (searchPlaylist) {
            setPlaylist(searchPlaylist);
        }

    } else {
        // Возвращаем исходное состояние, когда строка поиска пуста
        setSongItems(originalSongItems);
    }
};

  useEffect(() => {
    loadSongItems();
  }, []);
  useEffect(() => {
    // Находим элемент списка по классу и сбрасываем его позицию скролла
    const songListElement = document.querySelector('#songs');
    if (songListElement) {
      songListElement.scrollTop = 0;
    }
  }, [hiddenChecked]); 

  return (
    <div>
      <Preloader isLoading={isLoading} />
      <div className={styles.top_bar}>
        <div style={{marginBottom:'15px'}}>
          <Filter onChange={handleFilterChange} totalSong = {songItems.length}/>
          <label  className={styles.hiddenSong} ><input type="checkbox" checked={hiddenChecked} onChange={
            (e)=>{
              setSongItems(prev=> [...prev.map(el=>({...el, isHidden: !el.isHidden}))]);
              setHiddenChecked(prev=>prev=!hiddenChecked)
            }
            }/><div className="btn">Скрытые песни</div></label>
        </div>  
        <div>
          <span><b>{ selectedFilterValues && selectedFilterValues?.length > 0 ? 'Найдено песен: ' : 'Всего песен: '}</b> {songItems?songItems.filter(el=>el.isHidden===false && !el.isArchive).length :''} </span>
          <input
            type="text"
            className={styles.search_input}
            placeholder="Поиск"
            onChange={(e) => searchSong(e.target.value)}
          />  
          </div> 
        <h1>{}</h1>
        {!!selectItem?.length && (
          <SelectList
            showSelected={ showSelected}
            onSelectItem={selectItem}
            clear={clear}
            onDeleteItem={handleDeleteItem}
            onTrackId={handleTrackID}
            clearAllSelected={clearAllSelected}
          />
        )}
      </div>

      <ul className={styles.song_list} id="songs">
        
        {songItems.map((item, idx) =>
          !item.isHidden && !item.isArchive ? (
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