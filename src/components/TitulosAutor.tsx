import { CiTimer } from 'react-icons/ci';

export function TitulosAutor() {
  return (
    <div className='bg-sky-800 text-slate-300 py-1 mt-1 mx-auto'>
      <div className='flex flex-row gap-1 lg:justify-center md:justify-start md:ml-4 sm:justify-start sm:ml-4'>
        <span>Desenvolvedor sênior | </span>
        <span>Desenvolvedor front-end | </span>
        <span>Desenvolvedor Angular</span>
      </div>

      <div className='flex flex-row gap-1 lg:justify-center md:justify-start md:ml-4 sm:justify-start sm:ml-4'>
        <span>MBA em gestão de projetos | </span>
        <span>MIT em engenharia de software com JAVA</span>
      </div>

      <div className='flex flex-row items-center gap-1 lg:justify-center md:justify-start md:ml-4 sm:justify-start sm:ml-4'>
        <span>
          <CiTimer></CiTimer>
        </span>
        <span>Bootcamp front-end com React (em curso) | </span>
        <span>
          <CiTimer></CiTimer>
        </span>
        <span className=''>Brasas english course (em curso)</span>
      </div>
    </div>
  );
}
