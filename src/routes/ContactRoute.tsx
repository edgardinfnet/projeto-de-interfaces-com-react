import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-simple-toasts';
import { CiSquareChevRight } from 'react-icons/ci';
import { useZorm } from 'react-zorm';
import { SchemaFormContact } from '../SchemaFormContact';
import { api } from '../api';
import { Button } from '../components/Button';
import { CardLoading } from '../components/CardLoading';
import { DivTitulo } from '../components/DivTitulo';
import { DivCard } from '../components/DivCard';
import { ErrorMessage } from '../components/ErrorMessage';

const loadingNotepad = false;

export function ContactRoute() {
  const title = 'Contato';
  const [loading, setLoading] = useState(loadingNotepad);
  const zormContact = useZorm('contact', SchemaFormContact, {
    async onValidSubmit(event) {
      event.preventDefault();
      setLoading(true);
      const getFormUrl =
        'https://getform.io/f/563d66ee-b660-4ef3-92c5-9cc900289252';
      const response = await api.post(getFormUrl, event.data);

      try {
        if (response.status === 200) {
          setLoading(false);
          toast('Seu contato foi criado com sucesso!');
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
    <div className='lg:w-[48rem] m-auto pt-7'>
      <DivTitulo>{title}</DivTitulo>

      {loading && <CardLoading></CardLoading>}
      {!loading && (
        <DivCard>
          <div className='ml-4'>
            <form ref={zormContact.ref} className='flex flex-col gap-3'>
              <div className=''>
                <input
                  type='text'
                  className='rounded w-full px-2 py-1 border focus:border-gray-500 outline-none'
                  placeholder='Digite um nome'
                  name={zormContact.fields.nome()}
                />
                {zormContact.errors.nome((error) => (
                  <ErrorMessage>{error.message}</ErrorMessage>
                ))}
              </div>
              <div className=''>
                <input
                  type='text'
                  className='rounded w-full px-2 py-1 border focus:border-gray-500 outline-none'
                  placeholder='Digite um email'
                  name={zormContact.fields.email()}
                />
                {zormContact.errors.email((error) => (
                  <ErrorMessage>{error.message}</ErrorMessage>
                ))}
              </div>
              <div>
                <textarea
                  className='rounded px-2 py-1 border focus:border-gray-500 outline-none w-full resize-none'
                  placeholder='Digite uma mensagem'
                  name={zormContact.fields.mensagem()}
                />
                {zormContact.errors.mensagem((error) => (
                  <ErrorMessage>{error.message}</ErrorMessage>
                ))}
              </div>

              <div className='flex flex-row gap-2'>
                <Button
                  type='submit'
                  className='bg-sky-800 hover:bg-sky-900 text-slate-100 rounded px-3 py-3 flex flex-row items-center gap-1'
                >
                  <CiSquareChevRight></CiSquareChevRight>
                  <span className='font-extralight'>enviar</span>
                </Button>
              </div>
            </form>
          </div>
        </DivCard>
      )}
    </div>
  );
}
