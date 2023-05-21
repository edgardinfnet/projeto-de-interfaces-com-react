import { AppBar } from './components/AppBar';
import { TitulosAutor } from './components/TitulosAutor';

export default function App() {
  return (
    <div>
      <AppBar></AppBar>
      <TitulosAutor></TitulosAutor>
      <h1 className='text-center font-bold p-10'>App.tsx</h1>
    </div>
  );
}
