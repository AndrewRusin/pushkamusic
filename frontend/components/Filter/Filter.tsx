'use client'

import {  IModernFilter } from '@/interfaces/CreateFilterForm.interface';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './Filter.module.css';
import { getFilterItemsModify } from '@/api/filter';
import { Button } from '../Button/Button';
import CloseApple from '@/public/icons/closeApple.svg'

interface Sibling1Props {
    onChange: (value: string[] | null) => void;
    totalSong:number
  }

export const Filter = ({ onChange,totalSong}:Sibling1Props): JSX.Element => {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const [filterItems, setFilterItems] = useState<IModernFilter | null>(null)
    const [checkedParams, setCheckedParams] = useState<number | null>(null)
    const [checkedItems, setCheckedItems] = useState<string[]>([])
    const [top, setTop] = useState<number>()

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newCheckedItems = [...checkedItems]
        if (event.target.checked) {
            newCheckedItems.push(event.target.value)
        } else {
            const index = newCheckedItems.indexOf(event.target.value);
            if (index !== -1) {
              newCheckedItems.splice(index, 1);
            }
        }
        setCheckedItems(newCheckedItems)
        setCheckedParams(newCheckedItems.length)
        return  onChange(newCheckedItems.length > 0 ? newCheckedItems : null)
    }
    const clearFilter = () => {
        onChange(null);
        setCheckedItems([]);
        setCheckedParams(null);
        document.querySelectorAll('input').forEach(el=>{
          el.checked = false
        })
    }
    useEffect(() => {
    
      if (showFilter) {
        setTop(window.scrollY)
        document.body.style.top = `-${top}px`
        document.body.classList.add('no-overflow');
      } else {
        document.body.classList.remove('no-overflow');
        window.scroll({top:top});
      }
      return () => {
        document.body.classList.remove('no-overflow');
        document.body.style.top = `initial`
        window.scroll({top:top});
      };
    }, [showFilter]);
    useEffect( () => {
        (async () => {
        const checkboxesObj = await getFilterItemsModify()
        Object.values(checkboxesObj).forEach(el=>{
          if (el.length>4) {
            el.forEach((item, idx) => {
              if(idx>3){
                item.hidden = true
              }
            })
          }
        })
        setFilterItems(checkboxesObj)
      })();
       return () => {
         // this now gets called when the component unmounts
       }; 
     }, [])

     if (filterItems) {
    return (
      <div>
        <Button  appearance={"primary"} className="filterButton" onClick={()=>setShowFilter(!showFilter)} style={{ color: checkedParams ? 'red' : '' }}>Фильтр {checkedParams ? checkedParams : ''}</Button>
       <div className={`${showFilter ? styles.show : ''} ${styles.filter}`}>
          <div className={styles.header}>
            <h3>Фильтр</h3>
            <span className='close' onClick={()=>setShowFilter(!showFilter)}> <CloseApple /></span>
          </div>
          <ul className={styles.filter_list}>  
              {Object.entries(filterItems).map(([key, value]) => (
                 <li key={key}>
                    <p>{key}</p>
                    {value.map((item)=>(
                        <label key={item._id} className={`${styles.custom_checkbox} ${item.hidden ? styles.hidden : ''}`}><input  type="checkbox" name="params" id={item._id} value={item.filterValue} onChange={handleFilterChange} /> <div>{item.filterItem}</div></label>
                    ))}
                    {value.length>4 && <span className={styles.show_options} onClick={() => {
                      setFilterItems(prev =>{
                        return {...prev, [key]: prev
                          ? prev[key].map(item =>
                              item.hasOwnProperty('hidden')
                                ? { ...item, hidden: !item.hidden }
                                : item
                            )
                          : [],}
                      })
                    }}>{filterItems[key].findIndex(el=>el.hidden)>0 ? 'больше +': 'меньше -'}</span>}
                </li>   
            ))}
        </ul>
        <div className={styles.footer}>
        {!!checkedParams && ( 
          <>            
          <Button  
          appearance={"primary"}
          className='clearFilter' 
          onClick={clearFilter}>
            Очистить
          </Button>
          <Button  appearance={"alert"} onClick={()=>setShowFilter(!showFilter)} >Показать {totalSong}</Button>
         </>
         )}
        </div>
        </div>
    </div> 
    )
    } else {
        return  <div>Заполните фильтр</div>         
    }
}
