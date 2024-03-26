'use client'
import { Button, Input } from "@/components"
import { useEffect, useState} from "react";
import styles from "./SelectList.module.css";
import {  selectItemProps } from "./SelectList.props";
import { createSelect } from "@/api/select";
import PlayList from '@/public/icons/playlist.svg'
import CloseApple from '@/public/icons/closeApple.svg'
import useClipboard from "react-use-clipboard";
import { getSongItems } from "@/api/song";
import { API } from "@/api/api";
import { ISongCategoriesResponse } from "@/interfaces/song.interface";
import { ISelectCategories, ISelectCategoriesResponse } from '@/interfaces/Selects.interface';
import Select, { ActionMeta, MultiValue, OptionProps, SingleValue, SingleValueProps, components } from 'react-select';
import { Options, messengers } from '@/utils/messengers'



export  function SelectList({onSelectItem,showSelected, clear, windowTop, clearAllSelected,...props}:selectItemProps):JSX.Element {
   
    const [songItems, setSongItems] = useState<ISongCategoriesResponse[]>([]);
    const [orderedSongs , setOrderedSongs ] = useState<ISongCategoriesResponse[]>([]);
    const [selectLink, setSelectLink] = useState<string | null>(null)
    const [showList, setShowList] = useState<boolean>(true)
    const [url, setUrl] = useState<string>('default_text')
    const [isCopied, setCopied] = useClipboard(url);
    const [clientName, setClientName] = useState<string>();
    const [selectedOption, setSelectedOption] = useState<Options | null>(null)

    const CustomOption: React.FC<OptionProps<Options, boolean>> = (props) => {
        return (
            <components.Option {...props}>
                <img src={props.data.icon} alt={props.data.label} style={{ width: 30, height: 30 }} />
                {props.data.label}
            </components.Option>
        );
    };
    
    const CustomSingleValue: React.FC<SingleValueProps<Options>> = ({ data }) => {
        return (
            <div style={{width:50}}>
                <img src={data.icon} alt={data.label} style={{ width: 30}} />
            </div>
        );
    };
       
  

    useEffect(() => {
        // Асинхронно загружаем элементы песен
        const loadSongItems = async (select:string[] | null = onSelectItem) => {
            try {
                const response = await getSongItems(); 
                // Обновляем состояние для каждого элемента, определяя, выбран он или нет
                response.forEach((el) => (el.isSelected = select?.includes(el._id) ?? false));
                
                // Только после загрузки и обновления songItems обновляем orderedSongs
                const ordered = select?.map(id => response.find(song => song._id === id)).filter(song => song !== undefined) as ISongCategoriesResponse[];
                setOrderedSongs(ordered);
                setSongItems(response); // Предполагается, что вы хотите отобразить все песни, а не только выбранные
               
            } catch (error) {
                console.error("Error loading song items:", error);
            }
        };
    
        if (showList) {
            loadSongItems();
         
        }
        
    }, [onSelectItem, showList]);

    useEffect(() => {
       
        if (!showList ) {
          document.body.classList.add('modal-open');
        } else {
          document.body.classList.remove('modal-open');
          if (windowTop) {
            window.scrollTo({ top: windowTop, behavior: 'smooth' }); 
          }
          
        }
        return () => {
          document.body.classList.remove('modal-open');
          
        };
      }, [showList]);
    const loadSongItems = async (select:string[] | null = onSelectItem) => {
        try {
          const response = await getSongItems(); 
          response.forEach((el) => (el.isSelected = false));
          response.forEach((el) => select?.includes(el._id) ? el.isSelected = true : el);
          const selected  = response.filter(el => select?.includes(el._id))
          
          setSongItems(selected );
          const playListArr = selected.map(el=>({src:API.uploadSrc+el.track_link, name:el.title})) 
       
  
        } catch (error) {
          console.error("Error loading song items:", error);
        }
      };

    async function createSelected() {
        if(onSelectItem){
        try {
            const data:ISelectCategories ={
                idArray: onSelectItem,
                isHidden: false,
                clientName: clientName,
                messenger: selectedOption?.value
            }
            const value =  await createSelect(data)
            setSelectLink(value._id)
            const url = `${process.env.NEXT_PUBLIC_DOMAIN}/select/${value._id}`;
            setUrl(url)
            // window.open(`/select/${value._id}`, '_blank');
        } catch (error) {
            console.log(error)
        }
    }
    }
    const showCollection = () => {
        setShowList(!showList)
        showSelected();
   
    }   
    const cancel    = () => {
        setShowList(!showList)
        clear();
    }
    const clearAll = () => {
        setShowList(!showList);
       clearAllSelected();
        
    }
    function deleteItem(id:string){
        setOrderedSongs(prev =>
            prev.filter(el=> el._id !== id)
            );
            props.onDeleteItem(id);

           
    }
    function trackId (idx:number) {
        props.onTrackId(idx)
    }
    const handleClientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClientName(event.target.value);
    };
    const handleChange = (newValue: SingleValue<Options> | MultiValue<Options>) => {
        if (Array.isArray(newValue)) {
          // Если требуется обработать множественный выбор, нужно решить, как это делать
          // Например, установить первый элемент массива или обновить другое состояние
          console.log('Выбрано несколько значений:', newValue);
        } else {
          // Устанавливаем одиночное значение
          setSelectedOption(newValue as Options);
        }
      };
        return (
            <>
                {onSelectItem && (
                    <div>
                    {showList && (<span className={styles.select_list_button}  onClick={showCollection}><PlayList/> <span className={styles.quantity}>{onSelectItem.length}</span></span>)}
                    {!showList && (<span className={styles.select_list_button}  onClick={cancel}><CloseApple/></span>)}
                    <div className={ !showList ? styles.select_list_wrapper:''}>
                    {!showList && (
                        <div style={{width:'100%'}}>
                            <div className={styles.clients_info}>
                            <Input name="clientName" placeholder='ИФ клиента' type='text' onChange={handleClientNameChange} className={styles.client_input}required/>
                            <Select
                                 value={selectedOption}
                                 onChange={handleChange}
                                 options={messengers}
                                 placeholder="параметр..."
                                 components={{SingleValue: CustomSingleValue, Option: CustomOption }}
                                 styles={{
                                    input: (base) => ({ ...base, display: 'none' })
                                  }}
                            />
                            </div>
                             <h3>Подборка ( {onSelectItem.length} )</h3>
                            <ul className={styles.select_list}>
                                {orderedSongs.map( (item, idx) =>
                                <li key={item._id}><span onClick={() => trackId(idx)}>{item.title}</span><span onClick={() => deleteItem(item._id)}><CloseApple/></span></li>
                                )
                                }
                            </ul>

                         <div className={styles.footer}>
                         
                            <Button appearance={"primary"} onClick={clearAll} >Очистить</Button>  
                          {selectLink ? <Button appearance={isCopied ? "green" : "alert"} onClick={setCopied}> {isCopied ? "Скопировано!👍" : "Скопировать"}</Button> : <Button appearance={"alert"} onClick={createSelected} className={styles.createSelect}>Создать</Button>}
                        </div>   
                        
                        </div>)}
                    </div>
                </div>)}
            </>
            )
  }