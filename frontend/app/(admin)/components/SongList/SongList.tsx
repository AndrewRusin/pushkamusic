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
import CloseApple from '@/public/icons/closeApple.svg'

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
  const [search, setSearch] = useState<boolean>(false)
  const [top, setTop] = useState<number>()
  const [searchValue, setSearchValue] = useState<string>('')


  const handlePlay = (trackIndex: number) => {
    setTrackID(trackIndex);
    setIsPlaying(true);
  };
const handleSelect = (itemId: string) => {
  setSelectItem(prev => prev ? [...prev, itemId] : [itemId]);
 
  setSongItems(prev=>prev.map(item =>
    item._id === itemId ? { ...item, isSelected: !item.isSelected } : item
  ));
  
  setIsPlaying(false);
};

const handleDeleteItem = (id: string) => {
  setSelectItem(prevSelectItem => prevSelectItem ? prevSelectItem.filter(itemId => itemId !== id) : null);

  setSongItems(prev=>prev.map(item =>
    item._id === id ? { ...item, isSelected: !item.isSelected } : item
  ));

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
    if (!selectedFilterValues?.includes('archive')) {
      response.filter(el=>el.params.includes('archive')).forEach(item => item.isArchive = true );
    }
    setSongItems(response);
    const playListArr = response.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})); 
      setPlaylist([...playListArr]);
      setIsLoading(false);
      setHiddenChecked(false);
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
      let updatedOriginalSongItems = [...originalSongItems];
      updatedOriginalSongItems.forEach(element => {
        element.isSelected = false
      });
      setOriginalSongItems(updatedOriginalSongItems);
      setSongItems(updatedOriginalSongItems);
    }   
    setSelectItem(null);
    setHiddenChecked(false); 
    setOriginalSelectItem([])
  } catch (error) {
    
  }
};
const  showSelected = () => {
  setSongItems(prev => prev.filter(el => el.isSelected === true ));
  setTop(window.scrollY)
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

  const filterRequest = async (filterValues: string[] ) => {
    const response = await getSongItemsFilter(filterValues);
    response.forEach((el) => {selectItem?.includes(el._id) ? el.isSelected = true : el});
    if (!filterValues.includes('archive')) {
      response.filter(el=>el.params.includes('archive')).forEach(item => item.isArchive = true )
    } 
    return response
  }
  
  const filterSongItems = async (filterValues: string[] | null) => {
    try {
      if (filterValues === null) {
        // Возвращаем оригинальное состояние, если фильтр пуст
       
        setSelectItem(selectItem);
        loadSongItems(selectItem);
      } else {
        setIsLoading(true)
        const response = await filterRequest(filterValues)
        
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
    setIsPlaying(false)
  };

  const searchSong = async (song: string) => {
    setSearchValue(song)
    let songs:ISongCategoriesResponse[];
    if (selectedFilterValues) {
      songs = await filterRequest(selectedFilterValues)
    } else {
      songs = originalSongItems;
    }
    // console.log(songs)
    if (song.length > 0) {
        const lowercasedInput = song.toLowerCase().split(' ')
        const searchArr = songs.filter((el) =>
            lowercasedInput.every(inputWord => el.title.toLowerCase().includes(inputWord))
        );
        
        setSearch(true)
        searchArr.forEach((el) => selectItem?.includes(el._id) ? el.isSelected = true : el);
        if (searchArr.length > 0) {
          setSongItems(searchArr);
        } else {
          setSongItems([]); // Set to empty array when no search results are found
        }
        
    } else {
        // Возвращаем исходное состояние, когда строка поиска пуста
        setSongItems(songs);
        setSearch(false)
    }
    setIsPlaying(false)
};
const clearSearchValue = async () => {
  let songs:ISongCategoriesResponse[];
  if (selectedFilterValues) {
    songs = await filterRequest(selectedFilterValues)
  } else {
    songs = originalSongItems;
  }
  setSearchValue('')
  setSongItems(songs);
  setSearch(false);

}

  useEffect(() => {
    if (!selectItem?.length) {
      loadSongItems();
    }
    
  
  }, [selectItem]);

  useEffect(() => {
    if (!!!songItems.length && !!!selectedFilterValues && !search) {
      setSongItems(originalSongItems)
    }
  }, [songItems])


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
          <div className={styles.search_input_wrapper}>
            <input
              type="text"
              className={styles.search_input}
              placeholder="Поиск"
              onChange={(e) => searchSong(e.target.value)}
              value={searchValue}
            />
            {searchValue.length>0 && (<span className={styles.search_clear_button}  onClick={clearSearchValue}><CloseApple/></span>)}
          </div>  
          </div> 
        {!!selectItem?.length && (
          <SelectList
            showSelected={ showSelected}
            onSelectItem={selectItem}
            clear={clear}
            onDeleteItem={handleDeleteItem}
            onTrackId={handleTrackID}
            clearAllSelected={clearAllSelected}
            windowTop={top || 0}
          />
        )}
      </div>
      <ul className={styles.song_list} id="songs">
        
        {songItems.map((item, idx) =>
          !item.isHidden && !item.isArchive ? (
            <li key={item._id}>
                <span onClick={() => handlePlay(idx)} className={styles.song_name}>{item.title}</span>
              <span className={styles.right_side}>
                <Link href={"/dashboard/edit_song_item/" + item._id} ><Edit/></Link>{" "}
                  <span
                    className = {item.isSelected ? styles.active : styles.not_active}
                    aria-disabled = {item.isSelected}
                    onClick = {!item.isSelected ? () => handleSelect(item._id) : () => handleDeleteItem(item._id)}
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