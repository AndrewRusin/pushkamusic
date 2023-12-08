'use client'
import { Button, Input } from '@/components';
import { useForm, SubmitHandler, Controller} from 'react-hook-form';
import { ISongForm, ISongCategoriesResponse } from '@/interfaces/song.interface';
import styles from './SongForm.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import Select from 'react-select';
import { redirect } from 'next/navigation';
import { createSongItems, deleteSongItem, findSongItem, patchSongItems } from '@/api/song';
import { SongFormProps } from './SongForm.props';
import { allFilesName, deleteFile, uploadFile } from '@/api/file';
import { getFilterItemsModify } from '@/api/filter';
import {  IModernFilter } from '@/interfaces/CreateFilterForm.interface';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { Options } from '@/utils/filterCategory';

export function SongForm({ idItem = '', ...props }: SongFormProps): JSX.Element {
  const [redirectTo, setRedirectTo] = useState<boolean>(false);
  const [valueForm, setValueForm] = useState<ISongCategoriesResponse>();
  const [checkboxes, setCheckboxes] = useState<IModernFilter | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectFileName, setSelectFileName] = useState<Options[]>([]);

  useEffect(() => {
    // Fetch song item details
    async function fetchSongItem() {
      if (idItem !== '') {
        try {
          const values = await findSongItem(idItem);
          setValueForm(values);
          setTextAreaValue(values.songsText);
        } catch (error) {
          console.error('Error fetching song item:', error);
        }
      }
    }
 
    // Fetch checkboxes
    async function fetchCheckboxes() {
      try {
        const checkboxesObj = await getFilterItemsModify();
        setCheckboxes(checkboxesObj);
      } catch (error) {
        console.error('Error fetching checkboxes:', error);
      }
    }
  
    // Fetch file names
    async function fetchFileNames() {
      try {
        const res = await allFilesName();
        setSelectFileName(res);
      } catch (error) {
        console.error('Error fetching file names:', error);
      }
    }
  
    // Execute the async functions
    fetchSongItem();
    fetchCheckboxes();
    fetchFileNames();
  }, [idItem]);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    }
  };



  const { register, control, handleSubmit, reset} = useForm<ISongForm>();

  const onCancel = () => {
    
    reset();
    // You can add additional logic here if needed
  };  

  const onSubmit: SubmitHandler<ISongForm> = async (data) => {
    removeEmptyFields(data);
    const totalData = { ...data, isHidden: isChecked, songsText: textAreaValue };
    if (valueForm) {
      totalData.title = data.title || valueForm.title;
      totalData.track_link = data.track_link || valueForm.track_link;
    } else {
      if (!file) {
        alert('Пожалуйста выберите файл');
        return;
      } else {
        try {
          setIsLoading(true);
          const formData = new FormData();
          const encodeFile = encodeURI(file.name);
          formData.append('files', file, encodeFile);
          const resFile = await uploadFile(formData);
          const resultFile = [...resFile][0];
          totalData.title = resultFile.name,
          totalData.track_link = resultFile.url;
        } catch (error) {
          alert(error);
        } finally {
          setIsLoading(false);
        }
      }
    }
    if (textAreaValue === '') {
      alert('Пожалуйста заполните текст песни');
      return;
    }
    try {
      const resData = idItem !== '' ? await patchSongItems(totalData, idItem) : await createSongItems(totalData);
      if (resData._id) {
        setRedirectTo(true);
      } else {
        setRedirectTo(false);
      }
    } catch (e) {
      console.log(e)
    }
  };
  const deleteItem = async (id: string, fileName: string) => {
    await deleteFile(fileName);
    await deleteSongItem(id);
    setRedirectTo(true);
  };
  if (redirectTo) {
    redirect('/dashboard/song_items');
  }
  
  return (
    <div {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {valueForm && selectFileName && (
          <div className='filenames'>
            <h1>{valueForm.title}, {valueForm.track_link}</h1>
            <Input {...register('title')} placeholder='Имя' type='text' defaultValue={valueForm.title} />
            <Controller
              control={control}
              name="track_link"
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  className={styles.select}
                  value={selectFileName.find(option => option.value === value)}
                  onChange={(option) => onChange(option ? option.value : '')}
                  placeholder="Выберите параметр..."
                  options={selectFileName}
                  isClearable={true}
                  backspaceRemovesValue={true}
                  ref={ref}
                />
              )}
            />
          </div>
        )}
        {!valueForm && (
          <div>
            <input type="file" name="songFile" id="songFile" onChange={handleFileChange} />
            {isLoading && <div className={styles.loadingIndicator}>Загрузка файла...</div>}
          </div>
        )}
        <div className={styles.textarea_wrapper}>
          {textAreaValue.trim() === '' && <span className={styles.errorText}>Это поле обязательное поле</span>}
          <div className={styles.textarea} contentEditable="true" onBlur={(e) => setTextAreaValue(e.currentTarget.innerHTML)} suppressContentEditableWarning={true}>
            {valueForm ? (
              <div dangerouslySetInnerHTML={{ __html: valueForm.songsText }} />
            ) : null}
          </div>
        </div>
        
        {valueForm ? (
          <div>
          <FilterCheckbox {...register('params')} filterItems={checkboxes} filterChecked={valueForm.params}/>
          </div>
        ) : (
          <FilterCheckbox {...register('params')} filterItems={checkboxes} filterChecked={[]}/>
        )}
        <div className={styles.footer}>
        <label>
          <input
            type="checkbox"
            name="hidden"
            checked={isChecked !== undefined ? isChecked : valueForm?.isHidden || false}
            onChange={() => setIsChecked((prev) => !prev)}
          />
           <span> скрыть песню</span>
        </label>
           {idItem && valueForm &&  (<Button
                                      appearance="alert"
                                      onClick={async () => deleteItem(idItem, valueForm.track_link)}
                                    >удалить
                                  </Button>)}
        <Button appearance='primary' type="button" onClick={onCancel}>Отмена</Button>
                    
        <Button appearance="primary" className={styles.button} type="submit">
          {idItem ? 'Сохранить' : 'Создать'}
        </Button>
        </div>    

      </form>
    </div>
  );
}

function removeEmptyFields(data: any) {
  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      delete data[key];
    }
  });
}
