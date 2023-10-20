'use client'
import { Button, Input } from '@/components'
import { useForm, SubmitHandler} from 'react-hook-form'
import styles from './ReleaseForm.module.css'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation';
import { ReleaseFormProps } from './ReleaseForm.props'
import { IReleaseForm } from '@/interfaces/ReleaseForm.interface'
import { findReleaseItem, patchReleaseItems, createReleaseItems } from '@/api/releases'

export  function ReleaseForm({idItem = '', ...props}:ReleaseFormProps ):JSX.Element {
    const [redirectTo, setRedirectTo] = useState<boolean>(false);
    const [valueForm, setValueForm] = useState<IReleaseForm>();
	const [error, setError] = useState<string>();


 
 
         useEffect( () => {
           (async () => {
            const values = await findReleaseItem(idItem);
            setValueForm(values)
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

    const{register,control, handleSubmit} = useForm<IReleaseForm>();
    const onSubmit: SubmitHandler<IReleaseForm> = async (data)=> {
        removeEmptyFields(data)
      try {
        const  resData   = idItem ? await patchReleaseItems(data,idItem) : await createReleaseItems(data)
        console.log(resData)
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
        redirect('/dashboard/release_items');
    }
   
    
    return (
    
     
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('title')} placeholder='Название' type='text' defaultValue={valueForm?.title} required/>
            <Input {...register('link')} placeholder='Ссылка' type='text' required defaultValue={valueForm?.link}/>
            <Input {...register('background')} placeholder='Значение' type='text' required defaultValue={valueForm?.background}/>
            <div>
              <input
                {...register('category')}
                type="radio"
                value="songs"
                id="songs" 
              />
              <label htmlFor="songs">Песни</label>

              <input
              {...register('category')}
                type="radio"
                value="clips"
                id="clips"
              />
              <label htmlFor="clips">Клипы</label>
            </div>

            <Button appearance='primary' className={styles.button}>{idItem?'Изменить':'Создать'}</Button>
        </form> 
   
  )
}
