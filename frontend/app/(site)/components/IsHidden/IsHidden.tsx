import Cookies from 'js-cookie';
import styles from "./IsHidden.module.css";
import React, { useState } from "react";

export const IsHidden = ({ id }: { id: string }) => {
    const [isLogged, setIsLogged] = useState<string>(Cookies.get('isLogged') || '');
    
    return (
        <div className={styles.content}>
            <h2>{isLogged ? 'Открыть подборку' : 'Подборка недоступна. Сделать для Вас новую подборку или открыть доступ к текущей?'}</h2> 
            <p className={styles.btn_grp}>
                <a className={styles.price_btn} href={isLogged ? `/dashboard/edit_select_item/${id}` : `https://wa.me/905058907481/?text=Здраствуйте!%20Сделайте%20пожалуйста%20для%20меня%20новую%20подборку%20песен`} target='_blank'>
                    <b>{isLogged ? 'Открыть доступ' : 'Сделать новую'}</b>
                </a>
                {!isLogged && (
                    <a className={`${styles.price_btn} ${styles.grey}`} href={`https://wa.me/905058907481/?text=Здраствуйте!%20Откройте%20пожалуйста%20доступ%20к%20подборке:%20https://pushkamusic.online/dashboard/edit_select_item/${id}`} target='_blank'>
                       <b> Открыть доступ к текущей</b>
                    </a>
                )}
            </p>
        </div>
    );
}
