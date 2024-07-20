import { FormEvent } from "react";
import { Link } from "react-router-dom"
import style from './signup.module.css'
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { IAuth } from "../../interfaces/auth";
function SignUp() {
  const handleForm = (e:FormEvent)=>{
    e.preventDefault();
    const target  = e.target as typeof e.target & IAuth;
   // const{email,password,name} = target;
}
  return (
    <div className={style['register']}>
    <form onSubmit={handleForm}> 
        <h1>Вход</h1>
        <TextField name="email" lable={"Ваш email"} place={"Email"}/>
        <TextField name="password" lable={"Ваш пароль"} place={"Пароль"}/>
        <TextField name="name" lable="Ваше имя" place="Имя"/>
       <div className={style["btn"]}>
       <Button className={style["loginbtn"]} typeButton="big">Зарегистрироваться</Button>
       </div>
       </form>
    <div className={style["bottom"]}>
        <span>Есть аккаунт?</span>
    <Link to={"/auth/signin"}>Войти</Link>
    </div>
</div>
  )
}

export default SignUp