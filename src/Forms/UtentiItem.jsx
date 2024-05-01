function UtentiItem({ userName, email, password }) {
  return (
    <>
      <tr>
        <td>{userName}</td>
        <td>{email}</td>
        <td>{password}</td>
      </tr>
    </>
  );
}

export default UtentiItem;
