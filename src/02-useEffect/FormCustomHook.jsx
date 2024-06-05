import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
  const { formState, onInputChange, onResetForm, email, password, username } =
    useForm({
      username: "",
      email: "",
      password: "",
    });
  // const { username, email, password } = formState;

  useEffect(() => {
    // console.log("username");
  }, [username]);

  useEffect(() => {
    // console.log("email");
  }, [email]);

  return (
    <>
      <h2>Form With Custom Hook</h2>
      <hr />
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        name="email"
        placeholder="email@email.com"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        name="password"
        placeholder="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Reset
      </button>
    </>
  );
};
