import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'button';
  onClick?: () => void;
};

export function Button({ children, className, type, onClick }: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
