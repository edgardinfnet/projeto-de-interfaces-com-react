type ErrorMessageProps = {
  //   children: React.ReactNode;
  children: any;
};

export function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div className='text-sm-alternative text-red-600 animate-pulse'>
      {children}
    </div>
  );
}
