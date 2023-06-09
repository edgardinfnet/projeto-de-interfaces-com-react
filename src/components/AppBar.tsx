import { LogoFoto } from './LogoFoto';
import { NomeAutor } from './NomeAutor';

export function AppBar() {
  return (
    <header className='bg-sky-800 py-2 flex flex-row gap-8 items-center lg:justify-center'>
      <LogoFoto></LogoFoto>
      <NomeAutor></NomeAutor>
    </header>
  );
}
