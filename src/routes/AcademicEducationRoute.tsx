import { Cursos } from '../components/Cursos';

const formacao = [
  {
    id: 1,
    url: 'https://www.infnet.edu.br/infnet/instituto/',
    imagem: '/src/assets/img/infnet.jpeg',
    instituicao: 'Instituto Infnet',
    curso: 'Bootcamp Desenvolvedor Front-End com React, Tecnologia',
    periodo: 'Janeiro de 2023 - julho de 2023 (previsão)',
    alt: 'Logo Infnet',
  },
  {
    id: 2,
    url: 'https://www.infnet.edu.br/infnet/instituto/',
    imagem: '/src/assets/img/infnet.jpeg',
    instituicao: 'Instituto Infnet',
    curso: 'MIT em engenharia de software com JAVA, Engenharia de Software',
    periodo: 'Agosto de 2018 - agosto de 2020',
    alt: 'Logo Infnet',
  },
  {
    id: 3,
    url: 'https://www.unisuam.edu.br/',
    imagem: '/src/assets/img/unisuam.jpeg',
    instituicao: 'UNISUAM',
    curso: 'MBA em Gestão de Projetos, Gestão de Projetos',
    periodo: 'Março de 2014 - maio de 2015',
    alt: 'Logo Unisuam',
  },
  {
    id: 4,
    url: 'https://www.unisuam.edu.br/',
    imagem: '/src/assets/img/unisuam.jpeg',
    instituicao: 'UNISUAM',
    curso: 'Superior de Tecnologia em Informática',
    periodo: 'Janeiro de 2010 - janeiro de 2013',
    alt: 'Logo Unisuam',
  },
];

export function AcademicEducationRoute() {
  return (
    <div>
      <div className='lg:w-[48rem] m-auto pt-7'>
        <div className='text-gray-800'>
          <h3 className='text-2xl pb-2'>Formação Acadêmica</h3>
          {formacao.map((academica) => (
            <div
              key={academica.id}
              className='py-4 px-4 rounded overflow-hidden shadow-lg mb-4 mx-2 bg-gray-100'
            >
              <div className='flex flex-row items-center gap-3 font-light'>
                <div className='ml-4'>
                  <a
                    href={academica.url}
                    target='_blank'
                    className='cursor-pointer hover:text-cyan-600 hover:underline'
                  >
                    <img
                      className='rounded-full border-solid border-2 border-sky-800 hover:border-sky-400'
                      src={academica.imagem}
                      alt={academica.alt}
                    ></img>
                  </a>
                </div>
                <div>
                  <p>
                    <a
                      href={academica.url}
                      target='_blank'
                      className='cursor-pointer hover:text-cyan-600 hover:underline'
                    >
                      {academica.instituicao}
                    </a>
                  </p>
                  <p>{academica.curso}</p>
                  <p>{academica.periodo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cursos></Cursos>
    </div>
  );
}
