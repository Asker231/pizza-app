import { Outlet } from 'react-router-dom'
import style from './auth.module.css'

function AuthLayout() {
  return (
    <div className={style['auth']}>
        <div className={style["left"]}>
          <img src="/public/auth-logo.svg" alt="" />
        </div>
        <section className={style["section"]}>
          <Outlet/>
        </section>
    </div>
  )
}

export default AuthLayout