import { useNavigate, useParams } from 'react-router-dom';
import { DivCard } from '../components/DivCard';
import { DivTitulo } from '../components/DivTitulo';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { CardLoading } from '../components/CardLoading';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { Button } from '../components/Button';
import toast from 'react-simple-toasts';

const initialNotepad = {
  id: 0,
  title: '',
  subtitle: '',
  content: '',
  created_at: '',
};
const iniLoadingOneNotepad = true;

export function NotepadRoute() {
  const title = 'Notepad';
  const params = useParams();
  const navigate = useNavigate();
  const [oneNotepad, setOneNotepad] = useState(initialNotepad);
  const [loadingOneNotepad, setLoading] = useState(iniLoadingOneNotepad);

  async function loadNotepad() {
    const response = await api.get(`/notepads/${params.id}`);
    const nextNotepad = response.data;
    setOneNotepad(nextNotepad);
  }

  async function deleteOneNotepad() {
    const response = await api.delete(`/notepads/${params.id}`);
    if (response.data.success === true) {
      toast('Deletado notepad');
      navigate('/Notepads');
    } else {
      toast('Ops, ocorreu um erro :(');
    }
  }

  useEffect(() => {
    loadNotepad();
  }, [params.id]);

  useEffect(() => {
    console.log(oneNotepad.id);
    if (oneNotepad.id === 0) {
      setLoading(false);
    }
  }, [oneNotepad]);

  return (
    <div className='lg:w-[48rem] m-auto pt-7 mb-20'>
      <DivTitulo>{title}</DivTitulo>
      {loadingOneNotepad && <CardLoading></CardLoading>}

      <DivCard>
        <div className='ml-4'>
          <div>
            <h2 className='font-bold'>{oneNotepad.title}</h2>
            <p className='text-sm-alternative'>
              {new Date(oneNotepad.created_at).toLocaleDateString() ===
              'Invalid Date'
                ? ''
                : new Date(oneNotepad.created_at).toLocaleDateString()}
            </p>
            <p>{oneNotepad.subtitle}</p>
          </div>

          <div className='flex flex-row gap-2 mt-3'>
            <Button className='bg-orange-500 text-slate-100 rounded px-3 py-3'>
              <CiEdit></CiEdit>
            </Button>
            <Button
              className='bg-red-600 text-slate-100 rounded px-3 py-3'
              onClick={deleteOneNotepad}
            >
              <CiTrash></CiTrash>
            </Button>
          </div>
        </div>
      </DivCard>
    </div>
  );
}
