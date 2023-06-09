import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

type BreadCrumbsProps = {
  breadLinks: {
    to: string;
    label: React.ReactNode;
  }[];
};

export function BreadCrumbs({ breadLinks }: BreadCrumbsProps) {
  return (
    <div className='flex gap-1 ml-4'>
      {breadLinks.map((link, index) => (
        <div
          key={index}
          className='text-sm mb-1 text-sky-800 flex flex-row items-center gap-1'
        >
          <Link to={link.to} className='text-sky-800 hover:underline'>
            {link.label}
          </Link>
          {index < breadLinks.length - 1 && <AiOutlineRight></AiOutlineRight>}
        </div>
      ))}
    </div>
  );
}

// import { AiOutlineRight } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

// type BreadCrumbsProps = {
//   breadsLinks: {
//     to: string;
//     label: string;
//   }[];
// };

// export function BreadCrumbs({ breadsLinks }: BreadCrumbsProps) {
//   return (
//     <div className='ml-4 text-sm mb-1 text-sky-800 flex flex-row items-center gap-1'>
//       {breadsLinks.map((breads, index) => (
//         <div key={index}>
//           <Link
//             to={breads.to}
//             className='text-blue-400 hover:text-blue-600 hover:underline'
//           >
//             {breads.label}
//           </Link>
//           <AiOutlineRight></AiOutlineRight>
//         </div>
//       ))}
//     </div>
//   );
// }

{
  /* <AiOutlineRight></AiOutlineRight>
<Link
  to='/create-notepad'
  className='hover:text-blue-600 hover:underline'
>
  criar notepads
</Link> */
}
