import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

import { useState } from "react";

function Form({ onAdd }) {
  const [cliked, setCliked] = useState(false);

  const [inputNote, setInputNote] = useState({
    title: "",
    imgUrl: "",
    filmUrl: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputNote({ ...inputNote, [name]: value });
  }

  function visualizza() {
    setCliked(true);
  }

  return (
    <>
      <form
        className="create-note"
        onSubmit={(e) => {
          onAdd(
            inputNote.title,
            inputNote.imgUrl,
            inputNote.filmUrl,
            inputNote.content
          );
          setInputNote({
            title: "",
            imgUrl: "",
            filmUrl: "",
            content: "",
          });
          e.preventDefault();
        }}
      >
        <input
          onClick={visualizza}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Titolo"
          value={inputNote.title}
        />

        {cliked && (
          <>
            <input
              onChange={handleChange}
              name="imgUrl"
              type="text"
              placeholder="Inserisci Url di Immagine"
              value={inputNote.imgUrl}
            />

            <input
              onChange={handleChange}
              name="filmUrl"
              type="text"
              placeholder="Inserisci Url del film"
              value={inputNote.filmUrl}
            />

            <textarea
              onClick={visualizza}
              onChange={handleChange}
              name="content"
              type="text"
              placeholder="Scrivi un anota"
              value={inputNote.content}
              rows={3}
            />
            <Zoom in={cliked}>
              <Fab className="button-salva" type="submit">
                <AddIcon />
              </Fab>
            </Zoom>
          </>
        )}
      </form>
    </>
  );
}

export default Form;
