
'use client'
import { API } from "@/api/api";

import { Button } from "@/components"
import { IReleaseCategoriesResponse } from "@/interfaces/ReleaseForm.interface";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./ReleaseList.module.css";
import { deleteReleaseItem, getReleaseItems } from "@/api/releases";


export  function ReleaseList() {

    const [ReleaseItems, setReleaseItems] = useState<IReleaseCategoriesResponse[]>([])

   
    useEffect(() => {
      fetch(API.release.findAll)
        .then((res) => res.json())
        .then((data) => {
        setReleaseItems(data)
         
        })
    }, [])
    
    async function  deleteItem(id:string){
        await deleteReleaseItem(id);
        const itemsRefresh = await getReleaseItems()
        setReleaseItems(itemsRefresh)
    }
    
    if (ReleaseItems.length) {
        return (
            <ul className={styles.release_list}>
                {ReleaseItems.map(item => (
                    <li key ={item._id} ><span>{item.title}</span> <span><Link href={'/dashboard/edit_release_item/' + item._id}>ред.</Link> <Button appearance="alert" onClick={async ()=>deleteItem(item._id)}>удалить</Button></span></li>
                ))}
                
            </ul>
        )
    } else {
        return <div>Здесь еще нет элементов</div>
    }

  }