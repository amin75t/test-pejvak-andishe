import { useForm } from "react-hook-form";
import { CustomButton } from "../components/ui/butten";
import TextField from "../components/ui/textfield";
import { PersonalCard } from "../components/ui/personal-card";

const MainPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <CustomButton size="18" color={"red"}>
        click
      </CustomButton>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <TextField
          register={register("test")}
          placeholder="amin"
          lableText="test"
        />
        <CustomButton type="submit" size="18" color="red">
          submit
        </CustomButton>
      </form>
      <PersonalCard
        name="amin"
        lastName="shahini"
        email="amin@amin.ir"
        phone="0921"
      />
    </>
  );
};

export default MainPage;
