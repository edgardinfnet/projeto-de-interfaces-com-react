import { CiSquareCheck, CiTimer } from 'react-icons/ci';
import { DivTitulo } from '../components/DivTitulo';

const cursosExtras = [
  {
    id: 1,
    curso: 'Brasas online english course, Brasas (em curso)',
    concluido: false,
  },
  {
    id: 2,
    curso: 'Angular 6 para webApps RESTFUL, Coti (janeiro/2019)',
    concluido: true,
  },
  { id: 3, curso: 'WebDeveloper em Java, Coti (junho/2019)', concluido: true },
  {
    id: 4,
    curso: 'English course, CLK Línguas (janeiro/2018)',
    concluido: true,
  },
  {
    id: 5,
    curso:
      'Curso programação front-end com javascript e jQuery, Caelum (janeiro/2014)',
    concluido: true,
  },
  {
    id: 6,
    curso:
      'Curso de PHP básico, Fiocruz (participação como ouvinte) (dezembro/2013)',
    concluido: true,
  },
  {
    id: 7,
    curso: 'Curso de Android, Digidata Curso (agosto/2012)',
    concluido: true,
  },
  {
    id: 8,
    curso: 'JAVA Completo, Digidata Curso (julho/2011)',
    concluido: true,
  },
  {
    id: 9,
    curso: 'Curso de UML, Universidade Gama Filho (dezembro/2011)',
    concluido: true,
  },
  {
    id: 10,
    curso: 'Banco de dados postgreSQL, Universidade Estácio de Sá (julho/2005)',
    concluido: true,
  },
  {
    id: 11,
    curso:
      'Construção de sites em HTML, Universidade Estácio de Sá (julho/2005)',
    concluido: true,
  },
  {
    id: 12,
    curso: 'Dreamweaver, Universidade Estácio de Sá (janeiro/2005)',
    concluido: true,
  },
  {
    id: 13,
    curso:
      'Introdução programação em Java, Universidade Estácio de Sá (julho/2005)',
    concluido: true,
  },
];
const title = 'Cursos Extras';

export function Cursos() {
  return (
    <div className='lg:mx-auto sm:mx-3 lg:w-[48rem] m-auto pt-7 mb-20'>
      <DivTitulo>{title}</DivTitulo>
      <div className='text-gray-800 pb-2'>
        <div className='rounded overflow-hidden shadow-lg mb-4 ml-4 py-2 bg-gray-100'>
          {cursosExtras.map((extras) => (
            <div key={extras.id} className=''>
              <p className='flex flex-row items-center gap-1 px-2'>
                <span className='text-green-500'>
                  {extras.concluido ? (
                    <CiSquareCheck className='text-green-500'></CiSquareCheck>
                  ) : (
                    <CiTimer className='text-orange-500'></CiTimer>
                  )}
                </span>
                <span className='font-light'>{extras.curso}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
