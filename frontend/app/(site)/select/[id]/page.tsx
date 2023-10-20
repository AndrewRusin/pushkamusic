'use client'

import { findSelectItem } from "@/api/select"
import { getSongItemsSelect } from "@/api/song"
import { ISongCategoriesResponse } from "@/interfaces/song.interface"
import { useEffect, useState } from "react"
import { SongList } from "../../components"





export default function  EditFilterItem({params}:{params:{id:string}}) {  
    const [songItems, setSongItems] = useState<ISongCategoriesResponse[] >([]) 
  
    
    useEffect(() => {
        (async () => {

            const songsArr= await findSelectItem(params.id)
            const data = await getSongItemsSelect(songsArr.idArray)
            setSongItems(data)
      
            console.log(songItems)
        })();
      return () => {
        
      }
    }, [])
    


  return (
      <div >
       <SongList songs={songItems}/>
      </div>
    )
  }

