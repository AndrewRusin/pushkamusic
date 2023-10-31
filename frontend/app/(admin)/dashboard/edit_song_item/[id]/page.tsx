'use client'

import { SongForm } from "@/app/(admin)/components"

export default function  EditSongItem({params}:{params:{id:string}}) {    
  return (
      <div >
          <SongForm idItem={params.id}/>
      </div>
    )
  }