import { Link, useNavigate } from "react-router-dom"
import style from './signin.module.css';
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { FormEvent } from "react";
import {IAuth} from'../../interfaces/auth.ts'
import axios from "axios";
import { api } from "../../helper/api.ts";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/userSlice.ts";

function SignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleForm = (e:FormEvent)=>{
        e.preventDefault();
        const target  = e.target as typeof e.target & IAuth;
        const{email,password} = target;
        sendUser(email.value,password.value)
        navigate('/')


    }

    const sendUser = async(email:string,password:string)=>{
          let {data} = await axios.post(api.auth,{
              email,
              password
          })

          localStorage.setItem('jwt',data.access_token)
          dispatch(userLogin(data.access_token))

          
    }
  return (
    <div className={style['login']}>
        <form onSubmit={handleForm}> 
            <h1>Вход</h1>
            <TextField name="email" lable={"Ваш email"} place={"Email"}/>
            <TextField type="password" name="password" lable={"Ваш пароль"} place={"Пароль"}/>
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