import { ButtonHTMLAttributes, FC } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton> = ({ children }) => {
  return <button className="btn-grad">{children}</button>;
};

export default Button;
