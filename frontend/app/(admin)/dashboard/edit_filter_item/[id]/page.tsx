'use client'
import { FilterForm } from "@/app/(admin)/components";



export default function  EditFilterItem({params}:{params:{id:string}}) {    
  return (
      <div >
          <FilterForm idItem={params.id}/>
      </div>
    )
  }