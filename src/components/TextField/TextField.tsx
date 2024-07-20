import style from "./textfield.module.css";
import { TextFieldProps } from "./textfield.props";

function TextField({ lable, place ,...props}: TextFieldProps) {
    return (
        <div className={style["textfield"]}>
            <span>{lable}</span>
            <div className={style["wrapinput"]}>
                <input {...props} placeholder={place} type="text" />
            </div>
        </div>
    );
}

export default TextField;
