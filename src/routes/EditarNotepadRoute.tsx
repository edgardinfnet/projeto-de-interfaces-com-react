import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CiCircleRemove, CiFloppyDisk } from 'react-icons/ci';
import toast from 'react-simple-toasts';
import { useZorm } from 'react-zorm';
import { NotepadFormSchema } from '../notepadFormSchema';
import { api } from '../api';
import { DivTitulo } from '../components/DivTitulo';
import { DivCard } from '../components/DivCard';
import { Button } from '../components/Button';
import { CardLoading } from '../components/CardLoading';
import { ButtonLink } from '../components/ButtonLink';
import { ErrorMessage } from '../components/ErrorMessage';
import { BreadCrumbs } from '../components/BreadCrumbs';

const initNotepad = {
  id: 0,
  title: '',
  subtitle: '',
  content: '',
  created_at: '',
};
const iniLoadingOneNotepad = true;

export function EditNotepadRoute() {
  const title = `Notepads > Notepad ${initNotepad.id} > Editar Notepad`;
  const params = useParams();
  const navigate = useNavigate();
  const [initFormState, setInitFormState] = useState(initNotepad);
  const [loadingOneNotepad, setLoading] = useState(iniLoadingOneNotepad);
  const zormNotepad = useZorm('edit-notepad', NotepadFormSchema, {
    async onValidSubmit(event) {
      event.preventDefault();
      const response = await api.patch(`/notepads/${params.id}`, event.data);
      if (response.data.success) {
        setLoading(false);
        toast('Atualizado com sucesso :)');
        navigate(`/notepad/${params.id}`);
      } else {
        toast('Erro não esperado :(');
      }
    },
  });

  async function loadNotepad() {
    const response = await api.get(`/notepads/${params.id}`);
    setInitFormState(response.data);
  }

  useEffect(() => {
    loadNotepad();
  }, [params.id]);

  useEffect(() => {
    if (initFormState.id === 0) {
      setLoading(false);
    }
  }, [initFormState]);

  return (
    <div className='lg:mx-auto sm:mx-3 lg:w-[48rem] m-auto pt-7 mb-20'>
      <DivTitulo>{title}</DivTitulo>
      <BreadCrumbs
        breadLinks={[
          { to: '/notepads', label: 'notepads' },
          {
            to: `/notepad/${initFormState.id}`,
            label: `notepad - ${initFormState.title}`,
          },
          {
            to: '',
            label: 'editar notepad',
          },
        ]}
      ></BreadCrumbs>
      {loadingOneNotepad && <CardLoading></CardLoading>}
      <DivCard>
        <div className='ml-4'>
          <form ref={zormNotepad.ref} className='flex flex-col gap-3'>
            <div className=''>
              <input
                type='text'
                className='rounded w-full px-2 py-1 border focus:border-gray-500 outline-none'
                placeholder='Digite um título'
                name={zormNotepad.fields.title()}
                defaultValue={initFormState.title}
              />
              {zormNotepad.errors.title((error) => (
                <ErrorMessage>{error.message}</ErrorMessage>
              ))}
            </div>
            <div>
              <input
                type='text'
                className={`rounded w-full px-2 py-1 border focus:border-gray-500 outline-none `}
                placeholder='Digite um subtítulo'
                name={zormNotepad.fields.subtitle()}
                defaultValue={initFormState.subtitle}
              />
              {zormNotepad.errors.subtitle((error) => (
                <ErrorMessage>{error.message}</ErrorMessage>
              ))}
            </div>
            <div>
              <textarea
                className='rounded px-2 py-1 border focus:border-gray-500 outline-none w-full resize-none'
                placeholder='Digite um comentário'
                name={zormNotepad.fields.content()}
                defaultValue={initFormState.content}
              />
              {zormNotepad.errors.content((error) => (
                <ErrorMessage>{error.message}</ErrorMessage>
              ))}
            </div>

            <div className='flex flex-row gap-2'>
              <Button
                type='submit'
                className='bg-green-600 hover:bg-green-700 text-slate-100 rounded px-3 py-3 flex flex-row items-center gap-1'
              >
                <CiFloppyDisk></CiFloppyDisk>
                <span className='font-extralight'>salvar</span>
              </Button>

              <ButtonLink
                to={`/notepads`}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-900 flex flex-row items-center gap-1`}
              >
                <CiCircleRemove></CiCircleRemove>
                <span className='font-extralight'>cancelar</span>
              </ButtonLink>
            </div>
          </form>
        </div>
      </DivCard>
    </div>
  );
}
