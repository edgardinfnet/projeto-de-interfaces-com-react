import React from 'react';

type DivTituloProps = {
  children: React.ReactNode;
};

export function DivTitulo({ children }: DivTituloProps) {
  return (
    <div className='text-gray-800'>
      <h3 className='text-2xl pb-2'>{children}</h3>
    </div>
  );
}
