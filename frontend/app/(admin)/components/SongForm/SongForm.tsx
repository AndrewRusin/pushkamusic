'use client'
import { Button, Input } from '@/components'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { ISongForm, ISongCategoriesResponse} from '@/interfaces/song.interface'
import styles from './SongForm.module.css'
import { ChangeEvent, useEffect, useState } from 'react'
import Select from 'react-select'
import { redirect } from 'next/navigation';
// import { SongCategories } from '@/utils/SongCategory'
import { createSongItems, findSongItem, patchSongItems } from '@/api/song'
import { SongFormProps } from './SongForm.props'
import { uploadFile } from '@/api/file'
import { IUploadFile } from '@/interfaces/uploadFile.interface'
import { getFilterItems, getFilterItemsModify } from '@/api/filter'
import { IFilterCategory, IModernFilter } from '@/interfaces/CreateFilterForm.interface'
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox'

export  function SongForm({idItem = '', ...props}:SongFormProps ):JSX.Element {
    const [redirectTo, setRedirectTo] = useState<boolean>(false);
    const [valueForm, setValueForm] = useState<ISongCategoriesResponse>();
    const [checkboxes, setCheckboxes] = useState<IModernFilter | null>(null);
    const [isChecked, setIsChecked] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [textAreaValue, setTextAreaValue] = useState<string>('')
	const [error, setError] = useState<string>();
  
         useEffect( () => {
           (async () => {
            const values = await findSongItem(idItem);
            setValueForm(values)
          })();
        
          return () => {
            // this now gets called when the component unmounts
          }; 
        }, [])
  
    useEffect( () => {
      (async () => {

      const checkboxesObj = await getFilterItemsModify()
      console.log(checkboxesObj)
      setCheckboxes(checkboxesObj)
    })();
     return () => {
       // this now gets called when the component unmounts
     }; 
   }, [])

    
    function removeEmptyFields(data:any) {
        Object.keys(data).forEach(key => {
          if (!data[key]) {
            delete data[key];
          }
        });
      }

      const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          const selectedFile = event.target.files[0];
          setFile(selectedFile);
        }
      };
      
    const{register,control, handleSubmit} = useForm<ISongForm>();
    const onSubmit: SubmitHandler<ISongForm> = async (data)=> {
        removeEmptyFields(data)
        if (!file) {
          alert('Пожалуйста выберите файл');
          return;
        }
        const formData = new FormData();
        const encodeFile = encodeURI(file.name)
        formData.append('files', file, encodeFile)
      try {
         const resFile = await uploadFile(formData);
        const resultFile = [...resFile][0]
        const totalData = {...data,title:resultFile.name, track_link:resultFile.url, isHidden:isChecked,songsText:textAreaValue}
        console.log(totalData)
        const  resData   = idItem ? await patchSongItems(totalData,idItem) : await createSongItems(totalData)
       
        if (resData._id) {
        setRedirectTo(true)
        }else{
            setRedirectTo(false)
        } 
        
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    
    }
    if (redirectTo) {
        redirect('/dashboard/song_items');
    }
   
    
    return (
    
      <div {...props}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" name="songFile" id="songFile" onChange={handleFileChange} />
        <div className={styles.textarea} contentEditable= "true" onBlur={e=>setTextAreaValue(e.currentTarget.innerHTML)}></div>
         <FilterCheckbox {...register('params')} filterItems={checkboxes} /> 
         <label >
            <input type="checkbox" name="hidden" id="" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>  
             <span>скрыть песню</span>
         </label>
            <Button appearance='primary' className={styles.button}>{idItem?'Изменить':'Создать'}</Button>
        </form> 
      </div>
  )
}

