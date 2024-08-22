import  { useState } from 'react'
import { Navigate, useLoaderData } from 'react-router-dom'
import { ICard } from '../../interfaces/Icard'
import style from './product.module.css'
import Button from '../../components/Button/Button' 
function Product() {
    const[back,setBack] = useState<boolean>(true)
    const data = useLoaderData() as ICard
    if(!back){
        return <Navigate to={'/'}/>
    }
  return (
    <div className={style['product']}>
        <div className={style["top"]}> 
            <div className={style["left"]}>
            <button onClick={()=>setBack(!back)} className={style['back']}>
                <img src="/public/arrowback.svg" alt="" />
            </button>   
            <h1>{data.name}</h1>
            </div>
            <Button className={style['btn']} typeButton='big'><img src="/public/cart-icon.svg" alt="" />В корзину</Button>
        </div>
        <div className={style["bottom"]}>
           <div style={{backgroundImage:`url('${data.image}')`}} className={style["image"]}></div>
            <div className={style["right"]}>
             <div className={style["top"]}>
                    <div className={style["price"]}>
                        Цена 
                        <span>{data.price}P</span>
                    </div>
                    <div className={style["rating"]}>
                        Рейтинг
                        <div className={style["rat"]}>
                        {data.rating} <img src="/public/star.svg" alt="" />
                        </div>
                    </div>
             </div>
             <div className={style["description"]}>
                Состав:
                {
                    data.ingredients.map((el)=>{
                        return <li>{el}</li>
                    })
                }
             </div>
            </div>
        </div>
    </div>
  )
}

export default Product