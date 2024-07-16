import Card from "../../components/Card/Card";
import style from "./home.module.css";
import { ICard } from "../../interfaces/Icard";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Home() {
    const [products, setProduct] = useState<Array<ICard>|unknown>([]);
    const data  = useLoaderData();


    useEffect(()=>setProduct(data),[])


    return (
        <div className={style["home"]}>
            <header>
                <h1>Меню</h1>
                <div className={style["search"]}>
                    <img src="/public/search-icon.svg" alt="" />
                    <input type="text" />
                </div>
            </header>
            <main >
                {
                    typeof products != ''
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
