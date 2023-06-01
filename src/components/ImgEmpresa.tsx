type ImgEmpresaProps = {
  src: string;
  alt: string;
};

export function ImgEmpresa({ src, alt }: ImgEmpresaProps) {
  return (
    <img
      className='rounded-full border-solid border-2 border-sky-800 hover:border-sky-400'
      src={src}
      alt={alt}
    ></img>
  );
}

{
  /* <img
    className='rounded-full border-solid border-2 border-sky-800 hover:border-sky-400'
    src={academica.imagem}
    alt={academica.alt}
></img> */
}
