import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonType = "small" | "big";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    typeButton?: ButtonType;
}
