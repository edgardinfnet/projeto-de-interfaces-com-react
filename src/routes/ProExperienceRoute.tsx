export function ProExperienceRoute() {
  return (
    <div className='lg:w-[48rem] m-auto pt-7'>
      <div className='text-gray-800'>
        <h3 className='text-2xl pb-2'>Experiência Profissional</h3>
        <div className='flex flex-row items-center gap-3'>
          <div className=''>
            <a
              href='https://www.ey.com/pt_br'
              target='_blank'
              className='cursor-pointer hover:text-cyan-600 hover:underline'
            >
              <img
                className='rounded-full border-solid border-2 border-sky-800 hover:border-sky-400'
                src='/src/assets/img/ey.jpeg'
                alt='Logo EY'
              ></img>
            </a>
          </div>
          <div>
            <p>
              <a
                href='https://www.ey.com/pt_br'
                target='_blank'
                className='cursor-pointer hover:text-cyan-600 hover:underline'
              >
                EY
              </a>
            </p>
            <p>Consultor sênior</p>
            <p>Modalidade híbrida</p>
            <p>Janeiro de 2023 - até o presente momento</p>
            <p>Rio de Janeiro, Rio de Janeiro, Brasil</p>
          </div>
        </div>
        <div>
          <p>Em construção</p>
        </div>
      </div>
    </div>
  );
}
