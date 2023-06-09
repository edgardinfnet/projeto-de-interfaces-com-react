import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'submit';
  onClick?: () => void;
};

export function Button({ children, className, type, onClick }: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
