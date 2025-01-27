import { useState, createContext } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {
  const noteList = [
    {
      id: 1,
      title: "ir a fiesta",
      marked: false,
    },
    {
      id: 2,
      title: "ir a casa",
      marked: false,
    },
    {
      id: 3,
      title: "ir a casa",
      marked: false,
    },
    {
      id: 4,
      title: "recordar ver tv",
      marked: false,
    }];

  const [notes, setNotes] = useState(noteList);

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id !== updatedNote.id) return note
      return updatedNote
    })
    setNotes(updatedNotes);
  }

  return (
    <NoteContext.Provider value={{
      notes, setNotes, updateNote
    }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export { NoteContext, NoteProviderWrapper };