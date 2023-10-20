'use client'
import { Button, Input } from '@/components'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { ICreateFilter, IFilterCategoriesResponse} from '@/interfaces/CreateFilterForm.interface'
import styles from './FIlterForm.module.css'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { redirect } from 'next/navigation';
import { filterCategories } from '@/utils/filterCategory'
import { createFilterItems, findFilterItem, patchFilterItems } from '@/api/filter'
import { FilterFormProps } from './FilterForm.props'

export  function FilterForm({idItem = '', ...props}:FilterFormProps ):JSX.Element {
    const [redirectTo, setRedirectTo] = useState<boolean>(false);
    const [valueForm, setValueForm] = useState<IFilterCategoriesResponse>();
	const [error, setError] = useState<string>();
 
         useEffect( () => {
           (async () => {
            const values = await findFilterItem(idItem);
            setValueForm(values)
          })();
        
          return () => {
            // this now gets called when the component unmounts
          }; 
        }, []);
    
    function removeEmptyFields(data:any) {
        Object.keys(data).forEach(key => {
          if (!data[key]) {
            delete data[key];
          }
        });
      }

    const{register,control, handleSubmit} = useForm<ICreateFilter>();
    const onSubmit: SubmitHandler<ICreateFilter> = async (data)=> {
        removeEmptyFields(data)
      try {
        const  resData   = idItem ? await patchFilterItems(data,idItem) : await createFilterItems(data)
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
        redirect('/dashboard/filter_items');
    }
   
    
    return (
    
      <div{...props}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('filterItem')} placeholder='Имя' type='text' defaultValue={valueForm?.filterItem} required/>
            <Input {...register('filterValue')} placeholder='Значение' type='text' required defaultValue={valueForm?.filterValue}/>
            <Controller
              control={control}
              name="category"
              render={({ field: { onChange,  value, ref} }) => (
                <Select
                    className={styles.select}
                    value={value?value:valueForm?.category}
                    onChange={onChange}
                    placeholder="Выберите параметр..."
                    options={filterCategories}
                    isClearable={true}
                    backspaceRemovesValue={true}
                    ref={ref}
                    instanceId={value?value.value:'id'}
                />
              )}
            />
            <Button appearance='primary' className={styles.button}>{idItem?'Изменить':'Создать'}</Button>
        </form> 
      </div>
  )
}

