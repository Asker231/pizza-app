import { Link } from "react-router-dom";
import { ICard } from "../../interfaces/Icard";
import style from "./card.module.css";

function Card({...prop }: ICard) {
    return (
        <Link   to={`/product/${prop.id}`} className={style["card"]}>
            <div style={{backgroundImage:`url('${prop.image}')`}} className={style["image"]}>
            </div>
            <button className={style["addCart"]}>
                <img src="/public/addcart-icon.svg" alt="" />
            </button>
            <div className={style["price"]}>
                {prop.price} <span>Р</span>
            </div>
            <div className={style["rating"]}>
                {prop.rating}
                <img src="/public/star.svg" alt="" />
            </div>
            <div className={style["bottom"]}>
                <div className={style["name"]}>{prop.name}</div>
                <div className={style["description"]}>
                    {prop.ingredients.join(",")}
                </div>
            </div>
        </Link>
    );
}

export default Card;
