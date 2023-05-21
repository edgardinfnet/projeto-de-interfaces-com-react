import { FaSpinner } from 'react-icons/fa';

export function TitulosAutor() {
  return (
    <div className='bg-sky-800 text-slate-300 py-1 mt-1'>
      <div className='flex flex-row items-center justify-center gap-1'>
        <span>Desenvolvedor sênior | </span>
        <span>Desenvolvedor front-end | </span>
        <span>Desenvolvedor Angular</span>
      </div>

      <div className='flex flex-row items-center justify-center gap-1'>
        <span>MBA em gestão de projetos | </span>
        <span>MIT em engenharia de software com JAVA</span>
      </div>

      <div className='flex flex-row items-center justify-center gap-1'>
        <span className='animate-spin'>
          <FaSpinner></FaSpinner>
        </span>
        <span>Bootcamp desenvolvedor front-end com React (em curso) | </span>
        <span className='animate-spin'>
          <FaSpinner></FaSpinner>
        </span>
        <span className=''>Brasas online english course (em curso)</span>
      </div>
    </div>
  );
}
