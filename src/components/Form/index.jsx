import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { users } from "../../users";
import { useState } from "react";
import useSound from "use-sound";
import popsound from "./pop1.wav";
import type from "./type.wav";

export const Form = ({ newUser, setNewUser, toggleUsers }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const [play] = useSound(popsound, { volume: 0.1 });
  const [playKey] = useSound(type, { volume: 0.03 });

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    play();
  };

  const formSchema = yup.object().shape({
    username: yup.string().required("***"),
    name: yup.string().required("****"),
    email: yup.string().required("***"),
    confirm_email: yup.string().required("***"),
    password: yup
      .string()
      .required("")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{3,})/,
        "!!"
      ),
    confirm_password: yup.string().oneOf([yup.ref("password"), null], "errou!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setNewUser([...newUser, data]);
    handleReset();
  };

  const toggle = () => {
    setPasswordShown(!passwordShown);
    play();
  };

  return (
    <div onKeyDown={() => playKey()} className="homeContainer">
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <p>Insira seu nome de usuário... {errors.username?.message}</p>
        <input
          className={errors.username ? "box red" : "box"}
          placeholder="xXfulaninhoXx"
          {...register("username")}
        />

        <p>Seu belíssimo nome...{errors.name?.message}</p>
        <input
          className={errors.name ? "box red" : "box"}
          placeholder="Xerox Autenticada da Silva"
          {...register("name")}
        />

        <p>
          Aquele endereço de email descolado vem aqui{errors.email?.message}
        </p>
        <input
          className={errors.email ? "box red" : "box"}
          placeholder="fulanohotwheels@bol.com.br"
          {...register("email")}
        />

        <p>Confirme seu email...{errors.confirm_email?.message}</p>
        <input
          className={errors.confirm_email ? "box red" : "box"}
          placeholder="É seu email mesmo?"
          {...register("confirm_email")}
        />

        <div className="password box">
          <h2>Sem segredinhos...</h2>
          {passwordShown ? <h1>👁👅👁</h1> : <h1>👅</h1>}

          <div>
            <p>
              Pra sua senha ficar tunada, ela deve conter 1 maiúscula, 1
              minúscula, 1 número, 1 caracter especial
            </p>
            <input
              type={passwordShown ? "text" : "password"}
              style={{ textTransform: "none" }}
              className={errors.password ? "box red" : "box"}
              placeholder="senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>

          <input
            type={passwordShown ? "text" : "password"}
            className={errors.confirm_password ? "box red" : "box"}
            style={{ textTransform: "none" }}
            placeholder="confirme sua senha"
            {...register("confirm_password")}
          />
          <p>{errors.confirm_password?.message}</p>
          <button className="box" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <div className="btnContainer">
        <button onClick={() => toggle()} className="box">
          👁{" "}
        </button>
        <button className="box" onClick={() => toggleUsers()}>
          👥
        </button>
        <button className="box" onClick={() => handleReset()}>
          ❌
        </button>
      </div>
    </div>
  );
};
