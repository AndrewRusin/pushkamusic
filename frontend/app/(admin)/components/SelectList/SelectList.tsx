'use client'
import { Button } from "@/components"
import { useEffect, useState} from "react";
import styles from "./SelectList.module.css";
import { ISelectItems, ISelectResponse, selectItemProps } from "./SelectList.props";
import { createSelect } from "@/api/select";
import { patchReleaseItems, createReleaseItems } from "@/api/releases";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

export  function SelectList({selectItem, deleteSelected, ...props}:selectItemProps):JSX.Element {
    const [selectItems, setSelectItems] = useState<ISelectItems[] >([])
    const [selectLink, setSelectLink] = useState<string | null>(null)

    const [showList, setShowList] = useState<boolean>(false)
    useEffect(() => {
        setSelectItems([...selectItems, selectItem]);
    }, [selectItem]); 
    
    function deleteItem(id: string): void {
        const arr = [...selectItems]
        const idx = arr.findIndex((el)=> el.id === id)
        arr.splice(idx,1)
       setSelectItems(arr)
       deleteSelected(id)
    }
    async function createSelected() {
       const arrIds =selectItems.flatMap(el=>el.id)
        try {
            const value  =  await createSelect({idArray:arrIds})
            setSelectLink(value._id)
        } catch (error) {
            console.log(error)
        }
     
     
    }

        




    if (selectItems.length) {
        return (
        <div>
            <Button appearance={"primary"} onClick={()=>setShowList(!showList)} className={styles.select_list_button}>{showList?'скрыть':'показать'} {selectItems.length}</Button>
            <div className={ showList ? styles.select_list_wrapper:''}>
            {showList && (<ul className={styles.select_list}>
                
                {selectItems.map((item,idx) => (
                    <li key ={idx} ><span>{item.name}</span>  <Button appearance="alert" onClick={ ()=>deleteItem(item.id)}>удалить</Button></li>
                ))}
                 <Button appearance={"primary"} onClick={createSelected}>Создать коллекцию</Button>   
                 {selectLink && <Link href={`/select/${selectLink}`}>Ссылка на коллекцию {selectLink}</Link>}
            </ul>)}
           
        </div>
              
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