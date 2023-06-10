import { DivCard } from '../components/DivCard';
import { DivTitulo } from '../components/DivTitulo';

export function HomeRoute() {
  const title = 'Quem sou';
  return (
    <div className='lg:mx-auto sm:mx-3 lg:w-[48rem] m-auto pt-7 mb-20'>
      <DivTitulo>{title}</DivTitulo>
      <DivCard>
        <div className='ml-4'>
          <p className='pb-3'>
            Sou entusiasta ao desenvolvimento front-end, admirador do back-end e
            apreciador da linguagem SQL.
          </p>
          <p className='pb-3'>
            Trabalho com desenvolvimento front-end a mais de 9 anos e atualmente
            aprimorando meus conhecimentos com o framework Angular e React.
          </p>
          <p className='pb-3'>
            Nesse período trabalhei em projetos ágeis desde startups até grandes
            estatais como Fiocruz e Petrobras.
          </p>
          <p className='pb-3'>
            Gosto de viajar, ir em restaurantes, curtir uma praia e subir a
            serra (não necessariamente nesta mesma ordem).
          </p>
          <p>Marido e PlayStation player nas horas vagas.</p>
        </div>
      </DivCard>
    </div>
  );
}
