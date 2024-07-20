import { Link, useNavigate } from "react-router-dom"
import style from './signin.module.css';
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { FormEvent } from "react";
import {IAuth} from'../../interfaces/auth.ts'

function SignIn() {
    const navigate = useNavigate()
    const handleForm = (e:FormEvent)=>{
        e.preventDefault();
        const target  = e.target as typeof e.target & IAuth;
        const{email,password} = target;
        localStorage.setItem('jwt',email.value)
        navigate('/')

    }
  return (
    <div className={style['login']}>
        <form onSubmit={handleForm}> 
            <h1>Вход</h1>
            <TextField name="email" lable={"Ваш email"} place={"Email"}/>
            <TextField name="password" lable={"Ваш пароль"} place={"Пароль"}/>
           <div className={style["btn"]}>
           <Button className={style["loginbtn"]} typeButton="big">Вход</Button>
           </div>
           </form>
        <div className={style["bottom"]}>
            <span>Нет аккаунта?</span>
        <Link to={"/auth/signup"}>Регистрация</Link>
        </div>
    </div>
  )
}

export default SignIn