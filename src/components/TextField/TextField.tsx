import style from "./textfield.module.css";
import { TextFieldProps } from "./textfield.props";

function TextField({ lable, place }: TextFieldProps) {
    return (
        <div className={style["textfield"]}>
            <span>{lable}</span>
            <div className={style["wrapinput"]}>
                <input placeholder={place} type="text" />
            </div>
        </div>
    );
}

export default TextField;
