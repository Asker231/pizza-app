
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./mainlayout.module.css";

import cn from "classnames";
import Button from "../../components/Button/Button";

function MainLayout() {
    const location = useLocation();
    const navigate = useNavigate()

    function Out(){
        localStorage.removeItem('jwt')
        navigate('/auth/signin')

    }
    return (
        <div className={style["mainlayout"]}>
            <nav className={style["navbar"]}>
                <div className={style["top"]}>
                    <img src="/public/avatar.svg" alt="" />
                    <div className={style["userInfo"]}>
                        <span>Kotsev Asker</span>
                        <p>kotsevasker0@gmail.com</p>
                    </div>
                    <div className={style["navButton"]}>
                        <Link
                            className={cn({
                                [style["active"]]: location.pathname === "/" ,
                            })}
                            to={"/"}>
                            {" "}
                            <img src="/public/menu-icon.svg" alt="" />
                            Меню
                        </Link>
                        <Link
                            className={cn({
                                [style["active"]]:
                                    location.pathname === "/basket",
                            })}
                            to={"/basket"}>
                            {" "}
                            <img src="/public/cart-icon.svg" alt="" />
                            Корзина
                        </Link>
                    </div>
                </div>
                <div className={style["bottom"]}>
                    <Button onClick={Out}  className={style["outBtn"]}>
                        <img src="/public/out-icon.svg" alt="" />
                        Выйти
                    </Button>
                </div>
            </nav>
            <div className={style["mobilebar"]}>
                <Link className={cn({[style['border']]:location.pathname == '/'})} to={'/'}> <img src="/public/Home - 192x192.svg" alt="" /></Link>
                <Link to={'/orders'} className={cn({[style['border']]:location.pathname == '/orders'})}> <img src="/public/Orders.svg" alt="" /></Link>
                <Link to={'/basket'} className={cn({[style['border']]:location.pathname == '/basket'})}> <img src="/public/Shopping Bag - 192x192.svg" alt="" /></Link>
                <Link to={'#'}> <img src="/public/Profile - 192x192.svg" alt="" /></Link>
            </div>
            <section className={style["section"]}>
                <Outlet />
            </section>
        </div>
    );
}

export default MainLayout;
