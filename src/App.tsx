import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { TitulosAutor } from './components/TitulosAutor';
import { HomeRoute } from './routes/HomeRoute';
import { NavBarFooter } from './components/NavBarFooter';
import { AcademicEducationRoute } from './routes/AcademicEducationRoute';
import { ProExperienceRoute } from './routes/ProExperienceRoute';
import { ContactRoute } from './routes/ContactRoute';
import { NotepadRoute } from './routes/NotepadRoute';

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
              path='/AcademicEducation'
              element={<AcademicEducationRoute></AcademicEducationRoute>}
            ></Route>
            <Route
              path='/ProExperience'
              element={<ProExperienceRoute></ProExperienceRoute>}
            ></Route>
            <Route
              path='/Contact'
              element={<ContactRoute></ContactRoute>}
            ></Route>
            <Route
              path='/Notepad'
              element={<NotepadRoute></NotepadRoute>}
            ></Route>
          </Routes>
          <NavBarFooter></NavBarFooter>
        </div>
      </BrowserRouter>
    </div>
  );
}
