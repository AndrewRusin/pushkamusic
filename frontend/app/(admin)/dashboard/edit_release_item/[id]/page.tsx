'use client'
import { ReleaseForm } from "@/app/(admin)/components";



export default function  EditFilterItem({params}:{params:{id:string}}) {    
  return (
      <div >
          <ReleaseForm idItem={params.id}/>
      </div>
    )
  }