import { Link } from 'react-router-dom';

export function NavBarFooter() {
  return (
    <footer className='bg-sky-800 fixed bottom-0 p-2 w-full text-lg font-semibold text-center flex flex-row justify-center gap-16'>
      <Link
        to='/'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline hover:animate-pulse'
      >
        Início
      </Link>
      <Link
        to='/pro-experience'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline hover:animate-pulse'
      >
        Experiências
      </Link>
      <Link
        to='/academic-education'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline hover:animate-pulse'
      >
        Formação
      </Link>
      <Link
        to='/contact'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline hover:animate-pulse'
      >
        Contato
      </Link>
      <Link
        to='/notepads'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline hover:animate-pulse'
      >
        Notepads
      </Link>
    </footer>
  );
}
