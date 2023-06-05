import { DivTitulo } from '../components/DivTitulo';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { Link } from 'react-router-dom';
import { DivCard } from '../components/DivCard';
import { CardLoading } from '../components/CardLoading';

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
      <div className='lg:w-[48rem] m-auto pt-7 mb-20'>
        <DivTitulo>{title}</DivTitulo>
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
                  <p>{notepad.subtitle}</p>
                </div>
              </Link>
            </DivCard>
          );
        })}
      </div>
    </div>
  );
}
