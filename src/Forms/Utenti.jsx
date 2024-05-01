import UtentiItem from "./UtentiItem";
import UserForm from "./userForms";
import { useState } from "react";

function Utenti() {
  const [registrato, setRegistrato] = useState(false);

  const [users, setUsers] = useState([]);

  function addUser(userName, email, password) {
    setUsers([...users, { userName, email, password }]);
    setRegistrato(true);
  }

  return (
    <>
      <UserForm onAdd={addUser} />

      {registrato && (
        <table className="utenti-taable">
          <thead className="thead">
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UtentiItem
                key={index}
                //   id={index}
                userName={user.userName}
                email={user.email}
                password={user.password}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Utenti;
