'use client'

import {  IModernFilter } from '@/interfaces/CreateFilterForm.interface';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './Filter.module.css';
import { getFilterItemsModify } from '@/api/filter';
import { Button } from '../Button/Button';


interface Sibling1Props {
    onChange: (value: string[] | null) => void;
  }
  const arr: string[] | null=[]
export const Filter = ({ onChange }:Sibling1Props): JSX.Element => {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const [filterItems, setFilterItems] = useState<IModernFilter | null>(null)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  
       
        if (event.target.checked) {
            arr.push(event.target.value)
          } else {
            const index = arr.indexOf(event.target.value);
            if (index !== -1) {
              arr.splice(index, 1);
            }
          }
      return  onChange(arr.length>0 ? arr : null)
     
      }
   
    useEffect( () => {
        (async () => {
        const checkboxesObj = await getFilterItemsModify()
        setFilterItems(checkboxesObj)
      })();
       return () => {
         // this now gets called when the component unmounts
       }; 
     }, [])
     if (filterItems) {
    return (
      <div>
        <Button  appearance={"primary"} onClick={()=>setShowFilter(!showFilter)} >Фильтр</Button>
      
        {showFilter && (<ul className={styles.filter}>
          <h3>Фильтр</h3>
              {Object.entries(filterItems).map(([key, value]) => (
                 <li key={key}>
                    <p>{key}</p>
                    {value.map(item=>(
                        <label key={item._id}><input  type="checkbox" name="params" id={item._id} value={item.filterValue} onChange={handleChange} /> {item.filterItem}</label>
                    ))}
                </li>   
            ))}  
        </ul>)}

    </div> 
    )
    } else {
        return  <div>Заполните фильтр</div>         
    }
}


