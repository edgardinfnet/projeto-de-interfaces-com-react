import { DivTitulo } from '../components/DivTitulo';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { Link } from 'react-router-dom';
import { DivCard } from '../components/DivCard';
import { CardLoading } from '../components/CardLoading';
import { ButtonLink } from '../components/ButtonLink';
import { CiCirclePlus } from 'react-icons/ci';

const iniNotepads: any[] = [];
const iniLoading = true;

export function NotepadsAllRoute() {
  const title = 'Notepads';
  const [notepads, setNotepads] = useState(iniNotepads);
  const [loading, setLoading] = useState(iniLoading);

  async function loadNotepads() {
    const response = await api.get('/notepads');
    const nextNotepads = response.data.notepads;
    setNotepads(nextNotepads);
  }

  useEffect(() => {
    loadNotepads();
  }, []);

  useEffect(() => {
    if (notepads.length > 0) {
      setLoading(false);
    }
  }, [notepads]);

  return (
    <div>
      <div className='lg:mx-auto sm:mx-3 lg:w-[48rem] pt-7 mb-20'>
        <DivTitulo>{title}</DivTitulo>

        {/* <div className='invisible sm:text-red-500 md:text-blue-600 lg:text-pink-400 xl:text-green-600 2xl:text-yellow-600'>
          Breakpoints
        </div> */}

        <div className='flex flex-row gap-2 ml-4 mb-2'>
          <ButtonLink
            to='/create-notepad'
            className='bg-sky-800 text-slate-100 flex flex-row items-center gap-1'
          >
            <CiCirclePlus></CiCirclePlus>
            <span className='font-extralight'>criar</span>
          </ButtonLink>
        </div>
        {loading && <CardLoading></CardLoading>}
        {notepads.map((notepad) => {
          return (
            <DivCard key={notepad.id}>
              <Link
                to={`/notepad/${notepad.id}`}
                key={notepad.id}
                className='block cursor-pointer'
              >
                <div className='ml-4'>
                  <h2 className='font-bold'>{notepad.title}</h2>
                  <p className='text-sm-alternative'>
                    {new Date(notepad.created_at).toLocaleDateString() ===
                    'Invalid Date'
                      ? ''
                      : new Date(notepad.created_at).toLocaleDateString()}
                  </p>
                  <p className='font-medium text-sm'>{notepad.subtitle}</p>
                  <p>{notepad.content}</p>
                </div>
              </Link>
            </DivCard>
          );
        })}
      </div>
    </div>
  );
}
