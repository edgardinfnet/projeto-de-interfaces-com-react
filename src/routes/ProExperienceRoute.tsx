import { Anchor } from '../components/Anchor';
import { DivCard } from '../components/DivCard';
import { DivTitulo } from '../components/DivTitulo';
import { ImgEmpresa } from '../components/imgEmpresa';

export function ProExperienceRoute() {
  const experiencias = [
    {
      id: 1,
      url: 'https://www.ey.com/pt_br',
      imagem: '/src/assets/img/ey.jpeg',
      alt: 'logo ey',
      empresa: 'EY',
      cargo: 'Consultor sênior',
      modalidade: 'Modalidade híbrida',
      periodo: 'Janeiro de 2023 - até o presente momento',
      local: 'Rio de Janeiro, Rio de Janeiro, Brasil',
      descricao: 'Em construção',
    },
    {
      id: 2,
      url: 'https://www.spassu.com.br/',
      imagem: '/src/assets/img/spassu.jpeg',
      alt: 'logo spassu',
      empresa: 'Spassu Tecnologia e Serviços',
      cargo: 'Analista de sistemas sênior',
      modalidade: 'Modalidade home office',
      periodo: 'Maio de 2020 - novembro de 2022 · 2 anos 7 meses',
      local: 'Rio de Janeiro, Rio de Janeiro, Brasil',
      descricao:
        'Dentro de um time de desenvolvimento ágil (SCRUM) remoto, atuei na Petrobras em diversos projetos como responsável pelo desenvolvimento front end utilizando o Angular e outros frameworks. Basicamente a integração como back end era feita por APIs REST do tipo JSON. Tecnologias utilizadas: Web design responsivo, PrimeNG · Kanban, Scrum, banco de dados Oracle, Angular (Framework), Bootstrap, JavaScript, CSS, HTML5, JSON, Angular Material, TypeScript.',
    },
    {
      id: 3,
      url: 'https://missoesmundiais.com.br/',
      imagem: '/src/assets/img/jmm.jpeg',
      alt: 'logo jmm',
      empresa: 'Missões Mundiais',
      cargo: 'Analista de programação pleno',
      modalidade: 'Modalidade presencial',
      periodo: 'Maio de 2014 - abril de 2020 · 6 anos',
      local: 'Rio de Janeiro, Rio de Janeiro, Brasil',
      descricao:
        'Líder da equipe de desenvolvimento. Responsável pelos novos e sistemas legados em Java, Delphi e banco de dados Oracle, Além disso iniciei novos projetos utilizando HTML5, CSS, Angular, JSON, JavaScript, Bootstrap. Tecnologias utilizadas: Web design responsivo, Kanban, Scrum, Windows Azure, banco de dados Oracle, Delphi, Angular (Framework), Bootstrap, JavaScript, CSS, HTML5, JSON, Java.',
    },
    {
      id: 4,
      url: 'http://lifecon.com.br/',
      imagem: '/src/assets/img/life.jpeg',
      alt: 'logo life con',
      empresa: 'Life Tecnologia e Consultoria',
      cargo: 'Web Designer',
      modalidade: 'Modalidade híbrida',
      periodo: 'Setembro de 2013 - abril de 2014 · 8 meses',
      local: 'Rio de Janeiro, Rio de Janeiro, Brasil',
      descricao:
        'Responsável pelo front end construindo e reformulando páginas web e de sistemas criados pelo departamento. Definições de padrões de usabilidade e aplicação de design responsivo utilizando HTML5, CSS, JavaScript, jQuery, jQuery mobile, Bootstrap e JSON. Tecnologias utilizadas: Web design responsivo, experiência do usuário (UX), JQuery, Bootstrap, JavaScript, CSS, PHP, HTML5, JSON.',
    },
    {
      id: 5,
      url: '#',
      imagem: '/src/assets/img/sem-img.jpeg',
      alt: 'logo localiza-ti',
      empresa: 'Localizar Tecnologia da Informação',
      cargo: 'Desenvolvedor web jr',
      modalidade: 'Modalidade presencial',
      periodo: 'Junho de 2012 - dezembro de 2012 · 7 meses',
      local: 'Rio de Janeiro, Rio de Janeiro, Brasil',
      descricao:
        'Como desenvolvedor fullstack participei de projetos para desenvolvimento de um sistemas voltado para smartfones utilizando HTML5, CSS, Javascript, jQuery, jQuery mobile, PHP, Postgresql e PostGIS. Tecnologias utilziadas: Web design responsivo, JQuery, JavaScript, CSS, PHP, PostgreSQL, HTML, jQuery móvel, PostGIS.',
    },
  ];
  const title = 'Experiência Profissional';
  return (
    <div className='lg:w-[48rem] m-auto pt-7 mb-20'>
      <DivTitulo>{title}</DivTitulo>

      {experiencias.map((experiencia) => (
        <DivCard key={experiencia.id}>
          <div className='flex flex-row items-center gap-3'>
            <div className='ml-4'>
              <Anchor href={experiencia.url}>
                <ImgEmpresa
                  src={experiencia.imagem}
                  alt={experiencia.alt}
                ></ImgEmpresa>
              </Anchor>
            </div>
            <div>
              <p>
                <Anchor href={experiencia.url}>{experiencia.empresa}</Anchor>
              </p>
              <p>{experiencia.cargo}</p>
              <p>{experiencia.modalidade}</p>
              <p>{experiencia.periodo}</p>
              <p>{experiencia.local}</p>
            </div>
          </div>
          <div className='pt-2 text-justify font-light'>
            <p>{experiencia.descricao}</p>
          </div>
        </DivCard>
      ))}
    </div>
  );
}
