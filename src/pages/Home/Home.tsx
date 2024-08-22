import Card from "../../components/Card/Card";
import style from "./home.module.css";
import { ICard } from "../../interfaces/Icard";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import gsap from "gsap";
import cn from 'classnames'

function Home() {
    const [products, setProduct] = useState<Array<ICard>>([]);
    const data = useLoaderData() as ICard[];

    useEffect(()=>{
        gsap.to('.main',{
            opacity:1,
            delay:0.5,
          
        })
        gsap.to(".search",{
            opacity:1,
            delay:0.5,
            y:10
        })
    },[])

    useEffect(()=>setProduct(data),[])
    return (
        <div className={style["home"]}>
            <header className="search">
                <h1>Меню</h1>
                <div className={ cn(style["search"])}>
                    <img src="/public/search-icon.svg" alt="" />
                    <input type="text" />
                </div>
            </header>
            <main className="main">
                {
                       products.map((el, ind) => {
                            return (
                                <Card

                                    key={ind}
                                    id={el.id}
                                    name={el.name}
                                    price={el.price}
                                    ingredients={el.ingredients}
                                    image={el.image}
                                    rating={el.rating} 
                              />
                            );
                        })
                    }
            </main>
        </div>
    );
}

export default Home;
