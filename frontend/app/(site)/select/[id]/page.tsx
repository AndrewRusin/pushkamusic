'use client'

import { findSelectItem } from "@/api/select"
import { getSongItemsSelect } from "@/api/song"
import { ISongCategoriesResponse } from "@/interfaces/song.interface"
import { useEffect, useState } from "react"
import { SongList } from "../../components"
import { Preloader } from "@/components"





export default function  EditFilterItem({params}:{params:{id:string}}) {  
    const [songItems, setSongItems] = useState<ISongCategoriesResponse[] >([]) 
    const [isLoading, setIsLoading] = useState<boolean>(true)
    
    useEffect(() => {
        (async () => {

            const songsArr= await findSelectItem(params.id)
            const data = await getSongItemsSelect(songsArr.idArray)
            setSongItems(data)
            setIsLoading(false)
            
        })();
    
    }, [])
    

  return (
      <div >
        <Preloader isLoading={isLoading} />
        <h1 className="page_title">Подборка</h1>
       <SongList songs={songItems.filter(el=> !el.isHidden )}/>
      </div>
    )
  }

