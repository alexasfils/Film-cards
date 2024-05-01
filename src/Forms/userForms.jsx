import { Fab } from "@mui/material";
import { useState } from "react";

function UserForm({ onAdd }) {
  const [cliked, setCliked] = useState(false);

  const [register, setRegister] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  }

  function visualizza() {
    setCliked(true);
  }

  return (
    <>
      <form
        className="user-form"
        onSubmit={(e) => {
          onAdd(register.userName, register.email, register.password);
          setRegister({ userName: "", email: "", password: "" });
          e.preventDefault();
        }}
      >
        <input
          onClick={visualizza}
          onChange={handleChange}
          name="userName"
          type="text"
          placeholder="User Name"
          value={register.userName}
        />

        {cliked && (
          <>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="User email"
              value={register.email}
            />
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="User password"
              value={register.password}
            />
            <Fab className="register-button" type="submit">
              Reg
            </Fab>
          </>
        )}
      </form>
    </>
  );
}

export default UserForm;
