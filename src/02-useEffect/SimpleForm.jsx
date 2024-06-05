import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Gab",
    email: "gab@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log("username");
  }, [username]);

  useEffect(() => {
    // console.log("email");
  }, [email]);

  return (
    <>
      <h2>Simple Form</h2>
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
      {username === "Gab" && <Message />}
    </>
  );
};
