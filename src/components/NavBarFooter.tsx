import { Link } from 'react-router-dom';

export function NavBarFooter() {
  return (
    <footer className='bg-sky-800 fixed bottom-0 p-2 w-full text-lg font-semibold text-center flex flex-row justify-center gap-16'>
      <Link
        to='/'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline'
      >
        Início
      </Link>
      <Link
        to='/ProExperience'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline'
      >
        Experiências
      </Link>
      <Link
        to='/AcademicEducation'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline'
      >
        Formação
      </Link>
      <Link
        to='/Contact'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline'
      >
        Contato
      </Link>
      <Link
        to='/Notepad'
        className='text-gray-50 cursor-pointer hover:text-cyan-200 hover:underline'
      >
        Notepad
      </Link>
    </footer>
  );
}
