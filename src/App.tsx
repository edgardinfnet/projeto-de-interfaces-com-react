import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { TitulosAutor } from './components/TitulosAutor';
import { HomeRoute } from './routes/HomeRoute';
import { NavBarFooter } from './components/NavBarFooter';
import { AcademicEducationRoute } from './routes/AcademicEducationRoute';
import { ProExperienceRoute } from './routes/ProExperienceRoute';
import { ContactRoute } from './routes/ContactRoute';
import { NotepadRoute } from './routes/NotepadRoute';
import { NotepadsAllRoute } from './routes/NotepadsAllRoute';
import { EditNotepadRoute } from './routes/EditarNotepadRoute';
import { CreateNotePadRoute } from './routes/CreateNotepadRoute';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <AppBar></AppBar>
          <TitulosAutor></TitulosAutor>
          <Routes>
            <Route path='/' element={<HomeRoute></HomeRoute>}></Route>
            <Route
              path='/academic-education'
              element={<AcademicEducationRoute></AcademicEducationRoute>}
            ></Route>
            <Route
              path='/pro-experience'
              element={<ProExperienceRoute></ProExperienceRoute>}
            ></Route>
            <Route
              path='/contact'
              element={<ContactRoute></ContactRoute>}
            ></Route>
            <Route
              path='/notepads'
              element={<NotepadsAllRoute></NotepadsAllRoute>}
            ></Route>
            <Route path='/notepad/:id' element={<NotepadRoute />} />
            <Route path='/editnotepad/:id' element={<EditNotepadRoute />} />
            <Route
              path='create-notepad'
              element={<CreateNotePadRoute></CreateNotePadRoute>}
            ></Route>
          </Routes>
          <NavBarFooter></NavBarFooter>
        </div>
      </BrowserRouter>
    </div>
  );
}
