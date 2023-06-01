import React from 'react';

type DivCard = {
  children: React.ReactNode;
};

export function DivCard({ children }: DivCard) {
  return (
    <div className='py-4 px-4 rounded overflow-hidden shadow-lg mb-4 mx-2 bg-gray-100 text-gray-800 font-light'>
      {children}
    </div>
  );
}
