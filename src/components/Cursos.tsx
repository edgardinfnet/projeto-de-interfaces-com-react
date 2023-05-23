import { CiSquareCheck, CiTimer } from 'react-icons/ci';

export function Cursos() {
  return (
    <div className='lg:w-[48rem] m-auto pt-7'>
      <div className='text-gray-800'>
        <h3 className='text-2xl pb-2'>Cursos Extras</h3>
        <div className='ml-4'>
          <p className='flex flex-row items-center gap-1'>
            <span className='text-orange-500'>
              <CiTimer></CiTimer>
            </span>
            <span>Brasas online english course, Brasas (em curso)</span>
          </p>
          <p className='flex flex-row items-center gap-1'>
            <span className='text-green-500'>
              <CiSquareCheck></CiSquareCheck>
            </span>
            <span>Angular 6 para webApps RESTFUL, Coti (janeiro/2019)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
