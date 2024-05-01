import { useState } from "react";
import NoteItem from "./NoteItem";
import Form from "./Form";

function Notes() {
  const [newNote, setNewNote] = useState([]);

  function addNote(title, imgUrl, filmUrl, content) {
    setNewNote([...newNote, { title, imgUrl, filmUrl, content }]);
  }

  function deleteNote(id) {
    setNewNote([
      ...newNote.filter((item, index) => {
        return index !== id;
      }),
    ]);
  }

  return (
    <>
      <Form onAdd={addNote} />
      <div className="notes-div">
        {newNote.map(function (item, index) {
          return (
            <NoteItem
              key={index}
              id={index}
              title={item.title}
              imgUrl={item.imgUrl}
              filmUrl={item.filmUrl}
              content={item.content}
              onCheked={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
