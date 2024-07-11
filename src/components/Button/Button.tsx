import { ButtonProps } from "./button.props";
import style from "./button.module.css";
import cn from "classnames";

const Button = ({
    typeButton = "small",
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(style["button"], className, style["active"], {
                [style["small"]]: typeButton === "small",
                [style["big"]]: typeButton === "big",
            })}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
