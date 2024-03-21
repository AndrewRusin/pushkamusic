'use client'
import { Button, Input } from '@/components'
import styles from './page.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ILoginForm } from './LoginForm.interface'
import { login } from '@/api/login'
import { useState } from 'react'
import Cookies from 'js-cookie';


export default  function Login() {

	const [error, setError] = useState<string>();
    const{register, handleSubmit} = useForm<ILoginForm>();
    const onSubmit: SubmitHandler<ILoginForm> = async (data)=> {
      
      try {
        const  resData   = await login(data)
        if (resData.access_token) {
          Cookies.set('isLogged', '1', {expires: 30, sameSite: 'None', secure: true });
          Cookies.set('token', resData.access_token, {expires: 30, sameSite: 'None', secure: true });
          window.location.href='/dashboard/song_items' 
        } else {
          alert(resData.message)
          setError(resData.message)
        }
      } catch (e) {
        if (e instanceof Error) {
          alert(e.message)
          setError(e.message);
        }
      } 
    }

    return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('login')} placeholder='login' type='text' defaultValue="test" />
            <Input {...register('password')} placeholder='password' type='password' />
            <Button appearance='primary' className={styles.login_button}>Login</Button>
        </form> 
      </div>
    </div>
  )
}

