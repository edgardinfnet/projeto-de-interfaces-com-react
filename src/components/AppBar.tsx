import { LogoFoto } from './LogoFoto';
import { NomeAutor } from './NomeAutor';

export function AppBar() {
  return (
    <header className='bg-sky-800 flex flex-row gap-8 items-center py-2'>
      <LogoFoto></LogoFoto>
      <NomeAutor></NomeAutor>
    </header>
  );
}
