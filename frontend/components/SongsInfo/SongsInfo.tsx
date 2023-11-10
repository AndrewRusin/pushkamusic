'use client'
import {  useState } from 'react';
import styles from './SongsInfo.module.css';
import { SongsInfoProps } from './SongsInfo.props';
import CloseApple from '@/public/icons/closeApple.svg'



export const SongsInfo = ({closeInfo, name, params,className, text,...props}:SongsInfoProps): JSX.Element => {
  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [
      {
          id: '1',
          tabTitle: 'Передача прав',
          content: ['Эксклюзивная передача 100% исключительных прав', 'Любой вид использования произведения', 'Неограниченный срок']
      },
      {
          id: '2',
          tabTitle: 'Медиафайлы',
          content: ['Демо с вокалом (MP3 | 320 kbps)', 'Минусовка (WAV | 24 bit | 44,1 kHz)', 'Мультитрек - полный многодорожечный проект песни (WAV | 24 bit | 44,1 kHz)']
      }
    ]

    return (
      <div className={`info_container ${className}`}>
           <section className={styles.top}>
           <div className={styles.top_close}><span className='close' onClick={()=>closeInfo()}> <CloseApple /></span></div> 
              <h3>{name}</h3>
              <div className={styles.btn_group}>
                <a href={`https://wa.me/905058907481/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D1%82%D1%8C%20%D1%86%D0%B5%D0%BD%D1%83%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8%20%20${name}`} className="bg_red" target='_blank'>Уточнить цену</a>
                <a href={`https://wa.me/905058907481/?text=%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9%D1%82%D0%B5%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0%20%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D1%83%20%D0%BF%D0%B5%D1%81%D0%B5%D0%BD%20%D0%B2%20%D1%81%D1%82%D0%B8%D0%BB%D0%B5%20/${name}, [${params?.toString()}]`} target='_blank' className='bg_grey'>Слушать похожие песни</a>
              </div>
            </section>
            <section className={styles.scroll}>
            <div className={styles.middle}>
                <h4>Текст песни</h4> 
                {text &&<div className={styles.song_text} dangerouslySetInnerHTML={{ __html: text }}></div>}
            </div>
            <div className={styles.bottom}>
              <h4>В стоимость входит</h4> 
               <div className={styles.tabs}>
                    {tabs.map((tab, i) =>
                        <button key={i} id={tab.id} disabled={currentTab == `${tab.id}`} onClick={(e)=>(setCurrentTab((e.target as HTMLElement).id))}>{tab.tabTitle}</button>
                    )}
                </div>
                <div >
                    {tabs.map((tab, i) =>
                        <div key={i}>
                            {currentTab === `${tab.id}` && <div className={styles.tab_content}>
                              <ul>
                                {tab.content.map((li,i) => 
                                  <li key={i}><img src={'/icons/list_icon.svg'} alt={'list icon'} /><span>{li}</span></li>
                                )}
                              </ul>
                            </div>}
                        </div>
                    )}
                </div>  
            </div>
            </section>
      </div>     
    )
}