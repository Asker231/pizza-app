import { InputHTMLAttributes } from "react";


export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>{
    lable:string,
    place:string
}