import { useForm } from "react-hook-form";
import validationSchema from "../../interfaces and schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from "../../interfaces and schemas/interfaces";
import { registerUser } from "../../api";

const FormRegister: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: IFormInput) => {
    registerUser(data)
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
          Nome:
          <input {...register("name")} placeholder="Name" />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

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

        <label>
          Phone number:
          <input {...register("phone")} placeholder="Phone" />
          {errors.phone && <p>{errors.phone.message}</p>}
        </label>

        <label>
          Is Medic:
          <input {...register("is_medic")} type="checkbox" />
        </label>

        <label>
          Is Admin:
          <input {...register("is_admin")} type="checkbox" />
        </label>

        <button type="submit"> Registrar-se</button>
      </form>
    </section>
  );
};

export default FormRegister;
