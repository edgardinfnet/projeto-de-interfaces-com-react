import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  to: string;
  className: string;
  children: React.ReactNode;
};

export function ButtonLink({ to, children, className }: ButtonLinkProps) {
  return (
    <Link to={to} className={`rounded px-3 py-3 ${className}`}>
      {children}
    </Link>
  );
}
