import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CiCircleRemove, CiEdit, CiTrash } from 'react-icons/ci';
import toast from 'react-simple-toasts';
import { api } from '../api';
import { DivCard } from '../components/DivCard';
import { DivTitulo } from '../components/DivTitulo';
import { CardLoading } from '../components/CardLoading';
import { Button } from '../components/Button';
import { ButtonLink } from '../components/ButtonLink';
import { BreadCrumbs } from '../components/BreadCrumbs';

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
    setLoading(false);
    if (response.data.success === true) {
      toast('Deletado notepad');
      navigate('/notepads');
    } else {
      toast('Ops, ocorreu um erro :(');
    }
  }

  useEffect(() => {
    loadNotepad();
  }, [params.id]);

  useEffect(() => {
    if (oneNotepad.id === 0) {
      setLoading(false);
    }
  }, [oneNotepad]);

  return (
    <div className='lg:mx-auto sm:mx-3 lg:w-[48rem] m-auto pt-7 mb-20'>
      <DivTitulo>{title}</DivTitulo>
      <BreadCrumbs
        breadLinks={[
          { to: '/notepads', label: 'notepads' },
          {
            to: `/notepad/${oneNotepad.id}`,
            label: `notepad - ${oneNotepad.title}`,
          },
        ]}
      ></BreadCrumbs>
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
            <p className='font-medium text-sm'>{oneNotepad.subtitle}</p>
            <p>{oneNotepad.content}</p>
          </div>

          <div className='flex flex-row gap-2 mt-3'>
            <ButtonLink
              to={`/editnotepad/${oneNotepad.id}`}
              className={`bg-orange-500 hover:bg-orange-600 text-slate-100 flex flex-row items-center gap-1`}
            >
              <CiEdit></CiEdit>
              <span className='font-extralight'>editar</span>
            </ButtonLink>
            <Button
              className='bg-red-600 hover:bg-red-700 text-slate-100 rounded px-3 py-3 flex flex-row items-center gap-1'
              onClick={deleteOneNotepad}
            >
              <CiTrash></CiTrash>
              <span className='font-extralight'>deletar</span>
            </Button>
            <ButtonLink
              to={`/notepads`}
              className={`bg-gray-300 hover:bg-gray-400 text-gray-900 flex flex-row items-center gap-1`}
            >
              <CiCircleRemove></CiCircleRemove>
              <span className='font-extralight'>cancelar</span>
            </ButtonLink>
          </div>
        </div>
      </DivCard>
    </div>
  );
}
