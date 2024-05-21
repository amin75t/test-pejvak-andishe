import { CustomButton } from "../components/ui/butten";
import TextField from "../components/ui/textfield";
import { PersonalCard } from "../components/ui/personal-card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
});
type FormData = z.infer<typeof schema>;

const MainPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit", 
    reValidateMode: "onChange", 
    shouldFocusError: true, 
  });
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
          register={register("username")}
          placeholder="amin"
          lableText="test"
          errors={errors["username"]}
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
