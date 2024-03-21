
'use client'
import { API } from "@/api/api";
import { deleteSelect, getSelectItems, toggleSelect } from "@/api/select";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./SelectItems.module.css";
import { ISelectCategoriesResponse } from "@/interfaces/Selects.interface";
import CloseApple from '@/public/icons/closeApple.svg'



function formatDateString(dateString:string) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('ru-RU', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).replace(',', '');
    return formattedDate;
}

export function SelectItems() {
    const [selectItems, setSelectItems] = useState<ISelectCategoriesResponse[]>([]);
    const [selectItemsOriginal, setSelectItemsOriginal] = useState<ISelectCategoriesResponse[]>([]);
    const [searchValue, setSearchValue] = useState<string>('')



    useEffect(() => {
        fetch(API.select.findAll)
            .then((res) => res.json())
            .then((data: ISelectCategoriesResponse[]) => {
                const formattedData = data.map((item: ISelectCategoriesResponse) => ({
                    ...item,
                    createdAt: formatDateString(item.createdAt),
                    updatedAt: formatDateString(item.updatedAt)
                }));
                setSelectItems(formattedData);
                setSelectItemsOriginal(formattedData);
            })
    }, []);

    async function deleteItem(id: string) {
        await deleteSelect(id);
        const itemsRefresh = await getSelectItems()
        setSelectItems(itemsRefresh)
    }

    async function handleToggleSelect(id: string, isHidden: boolean) {
        const res = await toggleSelect(id, {isHidden})
        setSelectItems(prev => prev.map(el => el._id === res._id ? {...el, isHidden: res.isHidden} : el))
    }
    const searchSelect = async (client: string) => {
        setSearchValue(client)

        if (client.length > 0) {
            const lowercasedInput = client.toLowerCase().split(' ')
            const searchArr = selectItemsOriginal.filter((el) =>
                lowercasedInput.every(inputWord => el.clientName && el.clientName.toLowerCase().includes(inputWord))
            );
            
     
            if (searchArr.length > 0) {
                setSelectItems(searchArr);
            } else {
                setSelectItems([]); 
            }
            
        } else {
 
            setSelectItems(selectItemsOriginal);
        }
    };
    const clearSearchValue =() => {
        setSearchValue('')
        setSelectItems(selectItemsOriginal);
      }
        return (
            <>
             <div className={styles.search_input_wrapper}>
                <input
                type="text"
                className={styles.search_input}
                placeholder="Поиск"
                onChange={(e) => searchSelect(e.target.value)}
                value={searchValue}
                /> 
             {searchValue.length>0 && (<span className={styles.search_clear_button}  onClick={clearSearchValue}><CloseApple/></span>)}
          </div>  
            <ul className={styles.select_items}>
                {selectItems.map(item => (
                    <li key={item._id}>
                        {item.messenger && <img src={'/icons/'+ item.messenger +'.svg'} alt={item.messenger} width="35"/>}
                        <span className={styles.client_name}>{item.clientName}</span>
                        <span><Link href={'/select/' + item._id} target="_blank">{item.updatedAt !== "Invalid Date" ? item.createdAt: item._id }</Link></span>
                        <span>{ <button onClick={() => handleToggleSelect(item._id, !item.isHidden)}><img src={!item.isHidden ? '/icons/visible.svg': '/icons/hidden.svg'} alt={item.messenger} width="30"/></button>}</span>
                    </li>
                ))}
            </ul>
            </>
        )
    
}
