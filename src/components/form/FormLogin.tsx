import { useForm } from "react-hook-form";
import validationSchema from "../../interfaces and schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from "../../interfaces and schemas/interfaces";
import { loginUser } from "../../api";

const FormLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: IFormInput) => {
    loginUser(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          E-mail:
          <input {...register("email")} placeholder="Email" />
          {errors.email && <p>{errors.email.message}</p>}
        </label>

        <label>
          Password:
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default FormLogin;
