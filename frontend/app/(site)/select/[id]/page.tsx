'use client'

import { findSelectItem } from "@/api/select"
import { getSongItemsSelect } from "@/api/song"
import { ISongCategoriesResponse } from "@/interfaces/song.interface"
import { useEffect, useState } from "react"
import { SongList } from "../../components"
import { Preloader } from "@/components"
import { IsHidden } from "../../components/IsHidden/IsHidden"





export default function  SelectItem({params}:{params:{id:string}}) {  
    const [songItems, setSongItems] = useState<ISongCategoriesResponse[] >([]) 
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isHidden, setIsHidden] = useState<boolean>(false)
    
    useEffect(() => {
        (async () => {

            const songsInfo= await findSelectItem(params.id)
            const data = await getSongItemsSelect(songsInfo.idArray)
            setIsHidden(songsInfo.isHidden)
            setSongItems(data)
            setIsLoading(false)
            
        })();
    
    }, [])
    

  return (
      <div >
        <Preloader isLoading={isLoading} />
        <h1 className="page_title">Подборка</h1>
        {isHidden ? <IsHidden id={params.id}/> : <SongList songs={songItems.filter(el => !el.isHidden)} />}
       
      </div>
    )
  }

