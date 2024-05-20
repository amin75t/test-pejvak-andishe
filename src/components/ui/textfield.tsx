import { FC, InputHTMLAttributes, PropsWithChildren } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  lableText: string;
  register?: UseFormRegisterReturn<string>;
}
const TextField: FC<PropsWithChildren<IProps>> = ({
  lableText,
  register,
  ...props
}) => {
  return (
    <div
      className=" flex items-start flex-col gap-1 focus:!outline-none focus:ring-0 focus:ring-offset-0
  justify-center"
    >
      <label htmlFor="">{lableText}</label>
      <input
        {...props}
        {...register}
        className=" rounded-md py-2 pl-1 border bg-slate-200"
      />
    </div>
  );
};

export default TextField;
