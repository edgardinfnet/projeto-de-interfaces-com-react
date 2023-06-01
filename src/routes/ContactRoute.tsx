import { DivTitulo } from '../components/DivTitulo';

export function ContactRoute() {
  const title = 'Contato';
  return (
    <div className='lg:w-[48rem] m-auto pt-7'>
      <DivTitulo>{title}</DivTitulo>
    </div>
  );
}
