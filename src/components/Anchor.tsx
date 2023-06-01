import React from 'react';

type AnchorProps = {
  href: string;
  children: React.ReactNode;
};

export function Anchor({ href, children }: AnchorProps) {
  return (
    <a
      href={href}
      target='_blank'
      className='cursor-pointer hover:text-cyan-600 hover:underline'
    >
      {children}
    </a>
  );
}

{
  /* <a
    href={academica.url}
    target='_blank'
    className='cursor-pointer hover:text-cyan-600 hover:underline'
>
    {academica.instituicao}
</a> */
}
