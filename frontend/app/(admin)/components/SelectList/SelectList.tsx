'use client'
import { Button } from "@/components"
import { useEffect, useState} from "react";
import styles from "./SelectList.module.css";
import { ISelectItems, ISelectResponse, selectItemProps } from "./SelectList.props";
import { createSelect } from "@/api/select";
import PlayList from '@/public/icons/playlist.svg'
import CloseApple from '@/public/icons/closeApple.svg'
import { patchReleaseItems, createReleaseItems } from "@/api/releases";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSongItems } from "@/api/song";
import { API } from "@/api/api";
import { IPlaylist } from "@/components/Player/Player.props";
import { ISongCategoriesResponse } from "@/interfaces/song.interface";

export  function SelectList({selectItem,showSelected, clear, ...props}:selectItemProps):JSX.Element {
   
    const [songItems, setSongItems] = useState<ISongCategoriesResponse[]>([]);
    const [playlist, setPlaylist] = useState<IPlaylist[] | null>(null);
    const [selectLink, setSelectLink] = useState<string | null>(null)
    const [showList, setShowList] = useState<boolean>(true)

    useEffect(() => {
     loadSongItems() 
    }, [selectItem])
    useEffect(() => {
        if (!showList ) {
          
          document.body.classList.add('no-overflow');
        } else {
          document.body.classList.remove('no-overflow');
        }
        return () => {
          document.body.classList.remove('no-overflow');
        };
      }, [showList]);
    const loadSongItems = async (select:string[] | null = selectItem) => {
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
        try {
            const value  =  await createSelect({idArray:selectItem})
            setSelectLink(value._id)
            const url = `${process.env.NEXT_PUBLIC_DOMAIN}/select/${value._id}`;
            console.log(url)
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url);
            } else {
                // Fallback for unsupported browsers
                const textArea = document.createElement("textarea");
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
            }
            window.open(`/select/${value._id}`, '_blank');
        } catch (error) {
            console.log(error)
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
                {!!selectItem.length && (
                    <div>
                    {showList && (<span className={styles.select_list_button}  onClick={showCollection}><PlayList/> <span className={styles.quantity}>{selectItem.length}</span></span>)}
                    {!showList && (<span className={styles.select_list_button}  onClick={cancel}><CloseApple/></span>)}
                    <div className={ !showList ? styles.select_list_wrapper:''}>
                    {!showList && (
                        <div style={{width:'100%'}}>
                            <ul className={styles.select_list}>
                                {songItems.map( (item, idx) =>
                                <li key={item._id}><span onClick={() => trackId(idx)}>{item.title}</span><span onClick={() => deleteItem(item._id)}><CloseApple/></span></li>
                                )
                                }
                            </ul>
                        <Button appearance={"primary"} onClick={createSelected} className={styles.createSelect}>Создать коллекцию</Button>
                        {selectLink && <Link href={`/select/${selectLink}`} target="_blank">Ссылка на коллекцию {selectLink}</Link>}
                        </div>)}
                    </div>
                </div>)}
            </>
            )
  }