'use client'
import { Button } from "@/components"
import { useEffect, useState} from "react";
import styles from "./SelectList.module.css";
import {  selectItemProps } from "./SelectList.props";
import { createSelect } from "@/api/select";
import PlayList from '@/public/icons/playlist.svg'
import CloseApple from '@/public/icons/closeApple.svg'
import useClipboard from "react-use-clipboard";
import Link from "next/link";
import { getSongItems } from "@/api/song";
import { API } from "@/api/api";
import { IPlaylist } from "@/components/Player/Player.props";
import { ISongCategoriesResponse } from "@/interfaces/song.interface";

export  function SelectList({onSelectItem,showSelected, clear, clearAllSelected,...props}:selectItemProps):JSX.Element {
   
    const [songItems, setSongItems] = useState<ISongCategoriesResponse[]>([]);
    const [playlist, setPlaylist] = useState<IPlaylist[] | null>(null);
    const [selectLink, setSelectLink] = useState<string | null>(null)
    const [showList, setShowList] = useState<boolean>(true)
    const [url, setUrl] = useState<string>('default_text')
    const [isCopied, setCopied] = useClipboard(url);
   
  

    useEffect(() => {
     loadSongItems() 
     
    }, [onSelectItem]);



    useEffect(() => {
       
        if (!showList ) {
          document.body.classList.add('modal-open');

        } else {
          document.body.classList.remove('modal-open');

        }
        return () => {
          document.body.classList.remove('modal-open');
        };
      }, [showList]);
    const loadSongItems = async (select:string[] | null = onSelectItem) => {
        try {
          const response = await getSongItems(); // Замените на свой эндпоинт
          response.forEach((el) => (el.isSelected = false));
          response.forEach((el) => select?.includes(el._id) ? el.isSelected = true : el);
          const selected  = response.filter(el => select?.includes(el._id))
          
          setSongItems(selected );
          const playListArr = selected.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})) 
          setPlaylist([...playListArr])
  
        } catch (error) {
          console.error("Error loading song items:", error);
        }
      };

    async function createSelected() {
        if(onSelectItem){
        try {
            const value  =  await createSelect({idArray:onSelectItem})
            setSelectLink(value._id)
            const url = `${process.env.NEXT_PUBLIC_DOMAIN}/select/${value._id}`;
            setUrl(url)
            // window.open(`/select/${value._id}`, '_blank');
        } catch (error) {
            console.log(error)
        }
    }
    }
    const showCollection = () => {
        setShowList(!showList)
        showSelected();
   
    }   
    const cancel    = () => {
        setShowList(!showList)
        clear();
    }
    const clearAll = () => {
        setShowList(!showList);
       clearAllSelected();
        
    }
    function deleteItem(id:string){
        setSongItems(prev =>
            prev.filter(el=> el._id !== id)
            );
            props.onDeleteItem(id);
           
    }
    function trackId (idx:number) {
        props.onTrackId(idx)
    }
        return (
            <>
                {onSelectItem && (
                    <div>
                    {showList && (<span className={styles.select_list_button}  onClick={showCollection}><PlayList/> <span className={styles.quantity}>{onSelectItem.length}</span></span>)}
                    {!showList && (<span className={styles.select_list_button}  onClick={cancel}><CloseApple/></span>)}
                    <div className={ !showList ? styles.select_list_wrapper:''}>
                    {!showList && (
                        <div style={{width:'100%'}}>
                             <h3>Подборка ( {onSelectItem.length} )</h3>
                            <ul className={styles.select_list} id="songs">
                                {songItems.map( (item, idx) =>
                                <li key={item._id}><span onClick={() => trackId(idx)}>{item.title}</span><span onClick={() => deleteItem(item._id)}><CloseApple/></span></li>
                                )
                                }
                            </ul>

                         <div className={styles.footer}>
                         
                            <Button appearance={"primary"} onClick={clearAll} >Очистить</Button>  
                          {selectLink ? <Button appearance={isCopied ? "green" : "alert"} onClick={setCopied}> {isCopied ? "Скопировано!👍" : "Скопировать"}</Button> : <Button appearance={"alert"} onClick={createSelected} className={styles.createSelect}>Создать</Button>}
                        </div>   
                        
                        </div>)}
                    </div>
                </div>)}
            </>
            )
  }