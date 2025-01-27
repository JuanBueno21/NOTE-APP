import { Routes, Route } from 'react-router-dom';
import './App.css'
// import HeaderComponent from './components/HeaderComponent';
import HomePages from './pages/HomePages';
import NotePages from './pages/NotePages';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/notes" element={<NotePages />} />
    </Routes>
  )
}

export default App;