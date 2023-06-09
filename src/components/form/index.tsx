import { useForm } from "react-hook-form";
import validationSchema from "../../interfaces and schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from "../../interfaces and schemas/interfaces";

const FormRegister: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: IFormInput) => console.log(data);

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
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <input {...register("phone")} placeholder="Phone" />
        {errors.phone && <p>{errors.phone.message}</p>}

        <label>
          Is Medic
          <input {...register("is_medic")} type="checkbox" />
        </label>

        <label>
          Is Admin
          <input {...register("is_admin")} type="checkbox" />
        </label>

        <button type="submit"> Registrar-se</button>
      </form>
    </section>
  );
};

export default FormRegister;
