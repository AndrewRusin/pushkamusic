'use client';
import { Button, Input } from '@/components';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { ISongForm, ISongCategoriesResponse } from '@/interfaces/song.interface';
import styles from './SongForm.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import Select from 'react-select';
import { redirect } from 'next/navigation';
import { createSongItems, findSongItem, patchSongItems } from '@/api/song';
import { SongFormProps } from './SongForm.props';
import { uploadFile } from '@/api/file';
import { IUploadFile } from '@/interfaces/uploadFile.interface';
import { getFilterItems, getFilterItemsModify } from '@/api/filter';
import { IFilterCategory, IModernFilter } from '@/interfaces/CreateFilterForm.interface';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export function SongForm({ idItem = '', ...props }: SongFormProps): JSX.Element {
  const [redirectTo, setRedirectTo] = useState<boolean>(false);
  const [valueForm, setValueForm] = useState<ISongCategoriesResponse>();
  const [checkboxes, setCheckboxes] = useState<IModernFilter | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false); // Добавили состояние для индикатора загрузки.

  useEffect(() => {
    if (idItem!=='') {
      (async () => {
        const values = await findSongItem(idItem);
        setValueForm(values);
        setTextAreaValue(values.songsText)
      })();
    }
    

    return () => {
      // This now gets called when the component unmounts.
    };
  }, []);

  useEffect(() => {
    (async () => {
      const checkboxesObj = await getFilterItemsModify();
      setCheckboxes(checkboxesObj);
    })();

    return () => {
      // This now gets called when the component unmounts.
    };
  }, []);

  function removeEmptyFields(data: any) {
    Object.keys(data).forEach((key) => {
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

  const { register, control, handleSubmit } = useForm<ISongForm>();
  const onSubmit: SubmitHandler<ISongForm> = async (data) => {
    removeEmptyFields(data);
    const totalData = { ...data, isHidden: isChecked, songsText: textAreaValue };

      if (valueForm) {
        totalData.title = valueForm.title;
        totalData.track_link = valueForm.track_link;
      }else {
        if (!file) {
          alert('Пожалуйста выберите файл');
        }else{
          try {
            setIsLoading(true); 
            const formData = new FormData();
            const encodeFile = encodeURI(file.name);
            formData.append('files', file, encodeFile);
            const resFile = await uploadFile(formData);
            const resultFile = [...resFile][0];
            totalData.title = resultFile.name,
            totalData.track_link = resultFile.url 
          } catch (error) {
            alert(error)
          } finally {
            setIsLoading(false);
          }
        }
      }
    
    if (textAreaValue==='') {
      alert('Пожалуйста заполните текст песни');
      return;
    }
    try { 
      const resData = idItem!=='' ? await patchSongItems(totalData, idItem) : await createSongItems(totalData);

      if (resData._id) {
        setRedirectTo(true);
      } else {
        setRedirectTo(false);
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } 
  };

  if (redirectTo) {
    redirect('/dashboard/song_items');
  }

  return (
    <div {...props}>
      {valueForm && <h1>{valueForm.title}</h1>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" name="songFile" id="songFile" onChange={handleFileChange} /> {isLoading && <div className={styles.loadingIndicator}> Загрузка файла...</div>}
       <div className={styles.textarea_wrapper}>
        {textAreaValue.trim() === '' && <span className={styles.errorText}>Это поле обязательное поле</span>}
        <div className={styles.textarea} contentEditable="true" onBlur={(e) => setTextAreaValue(e.currentTarget.innerHTML)} suppressContentEditableWarning={true}>
        {valueForm ? (
            <div dangerouslySetInnerHTML={{ __html: valueForm.songsText }} />
          ) : null}
        </div>
        </div>
        {valueForm ?<FilterCheckbox {...register('params')} filterItems={checkboxes} filterChecked={valueForm.params}/> :<FilterCheckbox {...register('params')} filterItems={checkboxes} filterChecked={[]}/>}
        <label>
        <input
            type="checkbox"
            name="hidden"
            id=""
            checked={isChecked !== undefined ? isChecked : valueForm?.isHidden || false}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <span>скрыть песню</span>
        </label>
        <Button appearance="primary" className={styles.button} type="submit" >
          {idItem ? 'Изменить' : 'Создать'}
        </Button>
      </form>
    </div>
  );
}
