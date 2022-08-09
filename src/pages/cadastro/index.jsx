import { StyledForm } from "./styles";
//import "./styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

function Cadastro() {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório")
      .min(3, "Mínimo 03 caracteres")
      .max(20, "Máximo 20 caracteres"),
    email: yup
      .string()
      .required("Campo Obrigatório")
      .email("Seu e-mail deve ser válido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .max(20, "deve conter no máximo 20 digitos")
      .min(8, "deve conter no minimo 08 digitos")
      .matches(
        /^(?=.*?[a-z])/,
        "deve conter pelo menos 01 letra minúscula (a-z)"
      )
      .matches(
        /^(?=.*?[A-Z])/,
        "deve conter pelo menos 01 letra maúscula (A-Z)"
      )
      .matches(/^(?=.*?[A-Z])/, "deve conter pelo menos 01 numero (0-9)")
      .matches(
        /^(?=.*?[#?!@$ %^&*-])/,
        "deve conter pelo menos 01 caracter especial (#?!@$ %^&*-)"
      ),
    confirmPassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const functSubmit = (data) => {
    history.push(`/login/${data.name}`);
  };

  //ASd1234$
  return (
    <StyledForm onSubmit={handleSubmit(functSubmit)}>
      <h3>Cadastro</h3>
      <div>
        <input placeholder="Nome" type="text" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <input placeholder="Email" type="text" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <input placeholder="Senha" type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <input
          placeholder="Confirmar senha"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <button type="submit">Cadastrar</button>
    </StyledForm>
  );
}

export default Cadastro;
