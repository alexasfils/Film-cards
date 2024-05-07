import { useState } from "react";
import NoteItem from "./NoteItem";
import Form from "./Form";
import Navbar from "../components/Navbar";
import Header from "./Header";
import Footer from "./Footer";

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
      <Header></Header>
      <Navbar></Navbar>
      <Form onAdd={addNote} />
      <Footer></Footer>
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
