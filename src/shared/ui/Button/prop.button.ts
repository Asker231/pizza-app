import type { HtmlHTMLAttributes, ReactNode } from "react";

export interface IButton extends HtmlHTMLAttributes<HTMLButtonElement>{
      children:ReactNode
      typeButton:'small'|'big'  
}