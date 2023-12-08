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

export  function SelectList({selectItem,showSelected, clear, ...props}:selectItemProps):JSX.Element {
    const [selectItems, setSelectItems] = useState<ISelectItems[] >([])
    const [selectLink, setSelectLink] = useState<string | null>(null)
    const [showList, setShowList] = useState<boolean>(true)
   
    async function createSelected() {
        try {
            const value  =  await createSelect({idArray:selectItem})
            setSelectLink(value._id)
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




    if (selectItem.length) {
        return (
        <div>
            {showList && (<span className={styles.select_list_button}  onClick={showCollection}><PlayList/> {selectItem.length}</span>)}
            {!showList && (<span className={styles.select_list_button}  onClick={cancel}><CloseApple/></span>)}
          
            {!showList && (
                   <div>
                   <Button appearance={"primary"} onClick={createSelected} className={styles.createSelect}>Создать коллекцию</Button>
                    
                 
                  
                 {selectLink && <Link href={`/select/${selectLink}`} target="_blank">Ссылка на коллекцию {selectLink}</Link>}
                 </div>)}
           
       
              
        </div>
        )
    } else {
        return (<div>
                    <Button appearance={"primary"} onClick={()=>setShowList(!showList)}>{showList?'скрыть':'показать'}</Button>
                    <div className={styles.select_list_wrapper}>
                        {showList && (<div>Здесь еще нет элементов</div>)}
                    </div>
                </div>)
    }
  }