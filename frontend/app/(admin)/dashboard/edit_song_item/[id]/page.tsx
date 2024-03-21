'use client'

import { SongForm } from "@/app/(admin)/components"

export default function  EditSongItem({params}:{params:{id:string}}) {    
  return (
    
          <SongForm idItem={params.id}/>
      
    )
  }