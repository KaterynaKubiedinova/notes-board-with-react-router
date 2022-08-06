import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Notes from './components/Notes';
import ChangeNote from './components/ChangeNoteForm';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes/>}/>
          <Route path='/:id' element={<ChangeNote/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
