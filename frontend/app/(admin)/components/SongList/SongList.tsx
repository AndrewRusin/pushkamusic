'use client'
import { API } from "@/api/api";

import { Button, Filter } from "@/components";
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

export const SongList = () => {
  const [songItems, setSongItems] = useState<ISongCategoriesResponse[]>([]);
  const [selectedFilterValues, setSelectedFilterValues] = useState<string[] | null>(null);
  const [playlist, setPlaylist] = useState<IPlaylist[] | null>(null);
  const [trackID, setTrackID] = useState(0);
  const [selectItem, setSelectItem] = useState<ISelectItems | null>(null);

  const loadSongItems = async () => {
    try {
      const response = await getSongItems(); // Замените на свой эндпоинт
      response.forEach((el) => (el.isSelected = false));
      console.log(response);
      setSongItems(response);
      const playListArr = response.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})) 
      setPlaylist([...playListArr])
    } catch (error) {
      console.error("Error loading song items:", error);
    }
  };

  const filterSongItems = async (filterValues: string[] | null) => {
    try {
      if (filterValues === null) {
        loadSongItems();
      } else {
        const response = await getSongItemsFilter(filterValues);
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

  const deleteItem = async (id: string, fileName: string) => {
    await deleteFile(fileName);
    await deleteSongItem(id);
    const itemsRefresh = await getSongItems();
    setSongItems(itemsRefresh);
  };

  const deleteSelected = (id: string) => {
    setSongItems(
      songItems.map((song) => {
        if (song._id === id) {
          song.isSelected = false;
        }
        return song;
      })
    );
  };

  const searchSong = (song: string) => {
    if (song.length) {
      const searchArr = songItems.filter((el) =>
        el.title.toLowerCase().includes(song.toLowerCase())
      );
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
        <Filter onChange={handleFilterChange} />
        <input
          type="text"
          className={styles.search_input}
          placeholder="Поиск"
          onChange={(e) => searchSong(e.target.value)}
        />
        {selectItem && (
          <SelectList
            selectItem={selectItem}
            deleteSelected={deleteSelected}
          />
        )}
      </div>

      <ul className={styles.song_list}>
        {songItems.map((item, idx) =>
          !item.isHidden ? (
            <li key={item._id}>
              <span>
                <span className={styles.order}>{item.order}</span>
                {!item.isSelected && (
                  <Button
                    appearance="primary"
                    onClick={() => {
                      setSelectItem({ id: item._id, name: item.title });
                      item.isSelected = true;
                    }}
                  >
                    +
                  </Button>)
                }
                <span onClick={() => setTrackID(idx)}>{item.title}</span>
              </span>
              <span>
                <Link href={"/dashboard/edit_song_item/" + item._id}>ред.</Link>{" "}
                <Button
                  appearance="alert"
                  onClick={async () => deleteItem(item._id, item.track_link)}
                >
                  удалить
                </Button>
              </span>
            </li>
          ) : null
        )}
      </ul>

      <div className={styles.player}>
        {playlist && <Player playlist={playlist} current_track={trackID} />}
      </div>
    </div>
  );
};
