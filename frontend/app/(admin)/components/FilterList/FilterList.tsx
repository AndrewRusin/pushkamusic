
'use client'
import { API } from "@/api/api";
import { deleteFilterItem, getFilterItems } from "@/api/filter";
import { Button } from "@/components"
import { IFilterCategoriesResponse } from "@/interfaces/CreateFilterForm.interface";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./FilterList.module.css";


export  function FilterList() {

    const [filterItems, setFilterItems] = useState<IFilterCategoriesResponse[]>([])

   
    useEffect(() => {
      fetch(API.filter.findAll)
        .then((res) => res.json())
        .then((data) => {
        setFilterItems(data)
         
        })
    }, [])
    
    async function  deleteItem(id:string){
        await deleteFilterItem(id);
        const itemsRefresh = await getFilterItems()
        setFilterItems(itemsRefresh)
    }
    
    if (filterItems.length) {
        return (
            
            <ul className={styles.filter_list}>
                {filterItems.map(item => (
                    <li key ={item._id} ><span>{item.filterItem}</span> <span><Link href={'/dashboard/edit_filter_item/' + item._id}>ред.</Link> <Button appearance="alert" onClick={async ()=>deleteItem(item._id)}>удалить</Button></span></li>
                ))}
            </ul>
        )
    } else {
        return <div>Здесь еще нет элементов</div>
    }

  }