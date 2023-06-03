import { Link } from 'react-router-dom';
import { Cursos } from '../components/Cursos';
import { DivCard } from '../components/DivCard';
import { DivTitulo } from '../components/DivTitulo';
import { ImgEmpresa } from '../components/ImgEmpresa';

export function AcademicEducationRoute() {
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
  const title = 'Formação Acadêmica';

  return (
    <div>
      <div className='lg:w-[48rem] m-auto pt-7'>
        <DivTitulo>{title}</DivTitulo>
        {formacao.map((academica) => (
          <DivCard key={academica.id}>
            <div className='flex flex-row items-center gap-3'>
              <div className='ml-4'>
                <Link
                  to={academica.url}
                  target='_blank'
                  className='hover:text-cyan-600 hover:underline'
                >
                  <ImgEmpresa
                    src={academica.imagem}
                    alt={academica.alt}
                  ></ImgEmpresa>
                </Link>
              </div>
              <div>
                <p>
                  <Link
                    to={academica.url}
                    target='_blank'
                    className='hover:text-cyan-600 hover:underline'
                  >
                    {academica.instituicao}
                  </Link>
                </p>
                <p>{academica.curso}</p>
                <p>{academica.periodo}</p>
              </div>
            </div>
          </DivCard>
        ))}
      </div>
      <Cursos></Cursos>
    </div>
  );
}
