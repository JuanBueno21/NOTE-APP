import { useContext } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { NoteContext } from "../contexts/note.context"
import NoteCard from "../components/NoteCard";
import "./NotePage.css";
import CreateNote from "../components/CreateNote";

const NotePages = () => {
  const { notes } = useContext(NoteContext);

  const noteCards = notes.map((note) => {
    return (
      <li key={note.id}>
        <NoteCard note={note}></NoteCard>
      </li>
    )
  });

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div>NotePages</div>

      <section id="notes-page">
        <h2>Notes</h2>
        <ul className="note-list">
          <CreateNote />
          {noteCards}
        </ul>
      </section>
    </>
  )
}

export default NotePages