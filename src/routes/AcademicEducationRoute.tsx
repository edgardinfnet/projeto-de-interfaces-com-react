import { Cursos } from '../components/Cursos';

export function AcademicEducationRoute() {
  return (
    <div>
      <div className='lg:w-[48rem] m-auto pt-7'>
        <div className='text-gray-800'>
          <h3 className='text-2xl pb-2'>Formação Acadêmica</h3>
          <div className='flex flex-row items-center gap-3'>
            <div className='ml-4'>
              <a
                href='https://www.infnet.edu.br/infnet/instituto/'
                target='_blank'
                className='cursor-pointer hover:text-cyan-600 hover:underline'
              >
                <img
                  className='rounded-full border-solid border-2 border-sky-800 hover:border-sky-400'
                  src='/src/assets/img/infnet.jpeg'
                  alt='Logo Infnet'
                ></img>
              </a>
            </div>
            <div>
              <p>
                <a
                  href='https://www.infnet.edu.br/infnet/instituto/'
                  target='_blank'
                  className='cursor-pointer hover:text-cyan-600 hover:underline'
                >
                  Instituto Infnet
                </a>
              </p>
              <p>Bootcamp Desenvolvedor Front-End com React, Tecnologia</p>
              <p>Janeiro de 2023 - julho de 2023 (previsão)</p>
            </div>
          </div>
        </div>
      </div>
      <Cursos></Cursos>
    </div>
  );
}
