import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "16" | "18";
  color: "blue" | "red";
}
export const CustomButton: FC<PropsWithChildren<IProps>> = ({
  size = "16",
  color,
  children,
  ...props
}) => {
  return (
    <>
      <button
        className={`${color === "red" ? "bg-red-400" : "bg-blue-400"} ${
          size === "18" ? " text-lg" : " text-base"
        } disabled:${color === "red" ? "bg-red-200" : "bg-blue-200"} px-7 py-1 rounded-md`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

