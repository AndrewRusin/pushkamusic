'use client'

import { API } from "@/api/api";
import { findSelectItem, toggleSelect } from "@/api/select"
import { Button } from "@/components"
import { ISelectCategoriesResponse } from "@/interfaces/Selects.interface";
import { useEffect, useState } from "react";




export default function  EditSelectItem({params}:{params:{id:string}}) {

  const [select, setSelect] = useState<ISelectCategoriesResponse>();


    useEffect( () => {
      ( async () => {
          await findSelectItem(params.id).then(el=>setSelect(el));
      })();
  })
    async function handleToggleSelect(id: string, isHidden: boolean) {
      try {
        const res = await toggleSelect(id, {isHidden});
        if (!res.isHidden && typeof(res) !== 'undefined') {
          setSelect(prev => prev ? ({...prev, isHidden: false}) : prev);
        } else {
          alert('Подборка успешно закрыта!');
        }
      } catch (err) {
        alert(err);
      }
    }    
    return (
      <div >
          <h1>Сделать подборку {params.id} видимой?</h1>
          {select?.isHidden ? <div style={{textAlign:'center'}}><Button appearance="alert" onClick={()=> handleToggleSelect(params.id, false)} style={{minWidth:100}}>Да</Button></div> : <p>'Подборка видима!'</p>}
      </div>
    )
}


