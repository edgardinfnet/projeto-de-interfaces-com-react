import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiCircleRemove, CiFloppyDisk } from 'react-icons/ci';
import { AiOutlineRight } from 'react-icons/ai';
import toast from 'react-simple-toasts';
import { useZorm } from 'react-zorm';
import { api } from '../api';
import { NotepadFormSchema } from '../notepadFormSchema';
import { DivCard } from '../components/DivCard';
import { DivTitulo } from '../components/DivTitulo';
import { ErrorMessage } from '../components/ErrorMessage';
import { ButtonLink } from '../components/ButtonLink';
import { Button } from '../components/Button';
import { CardLoading } from '../components/CardLoading';
import { BreadCrumbs } from '../components/BreadCrumbs';

const loadingNotepad = false;

export function CreateNotePadRoute() {
  const title = 'Criar Notepad';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(loadingNotepad);
  const zormNotepad = useZorm('create-notepad', NotepadFormSchema, {
    async onValidSubmit(event) {
      event.preventDefault();

      try {
        setLoading(true);
        const response = await api.post('/notepads', event.data);
        if (response.data.success) {
          toast('Seu notepad foi criado com sucesso!');
          navigate('/notepads');
        } else {
          setLoading(false);
          toast(`Ocorreu um erro, tente novamente :(`);
        }
      } catch (error) {
        setLoading(false);
        toast(`Erro inexperado (${error}) :( `);
      }
    },
  });

  return (
    <div className='lg:w-[48rem] m-auto pt-7 mb-20'>
      <DivTitulo>{title}</DivTitulo>

      <BreadCrumbs
        breadLinks={[
          { to: '/notepads', label: 'notepads' },
          {
            to: '/create-notepad',
            label: 'criar notepad',
          },
        ]}
      ></BreadCrumbs>

      {loading && <CardLoading></CardLoading>}
      {!loading && (
        <DivCard>
          <div className='ml-4'>
            <form ref={zormNotepad.ref} className='flex flex-col gap-3'>
              <div className=''>
                <input
                  type='text'
                  className='rounded w-full px-2 py-1 border focus:border-gray-500 outline-none'
                  placeholder='Digite um título'
                  name={zormNotepad.fields.title()}
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
                  <CiCircleRemove></CiCircleRemove>{' '}
                  <span className='font-extralight'>cancelar</span>
                </ButtonLink>
              </div>
            </form>
          </div>
        </DivCard>
      )}
    </div>
  );
}
