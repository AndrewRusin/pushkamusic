
'use client'
import { API } from "@/api/api";
import { deleteSelect, getSelectItems } from "@/api/select";
import { Button } from "@/components"
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./SelectItems.module.css";
import { ISelectCategoriesResponse } from "@/interfaces/Selects.interface";




export  function SelectItems() {

    const [SelectItems, setSelectItems] = useState<ISelectCategoriesResponse[]>([])

   
    useEffect(() => {
      fetch(API.select.findAll)
        .then((res) => res.json())
        .then((data) => {
        setSelectItems(data)
         
        })
    }, [])
    
    async function  deleteItem(id:string){
        await deleteSelect(id);
        const itemsRefresh = await getSelectItems()
        setSelectItems(itemsRefresh)
    }
    
    if (SelectItems.length) {
        return (
            
            <ul className={styles.select_items}>
                {SelectItems.map(item => (
                    <li key ={item._id} ><span><Link href={'/select/' + item._id}>{item._id}</Link></span> <span><Button appearance="alert" onClick={async ()=>deleteItem(item._id)}>удалить</Button></span></li>
                ))}
            </ul>
        )
    } else {
        return <div>Здесь еще нет элементов</div>
    }

  }