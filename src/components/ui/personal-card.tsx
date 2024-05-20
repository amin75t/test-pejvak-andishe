import { FC } from "react";
import { PersonalInfo } from "../../typs/ui";

export const PersonalCard: FC<PersonalInfo> = ({
  name,
  lastName,
  phone,
  email,
}) => {
  return (
    <div className=" bg-slate-400 rounded-md shadow-lg w-fit p-2 space-y-2">
      <h1>
        name:{name} {lastName}
      </h1>
      <p>phone:{phone}</p>
      <p>email:{email}</p>
    </div>
  );
};
