import Delete from "@mui/icons-material/Delete";

function NoteItem({ title, content, imgUrl, filmUrl, onCheked, id }) {
  function handleClick() {
    onCheked(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>

      <a href={filmUrl}>
        <img src={imgUrl} alt="" />
      </a>
      <p>{content}</p>

      <button onClick={handleClick}>
        <Delete />
      </button>
    </div>
  );
}

export default NoteItem;
