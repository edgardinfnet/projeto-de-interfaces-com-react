import { useNavigate, useParams } from 'react-router-dom';
import { DivCard } from '../components/DivCard';
import { DivTitulo } from '../components/DivTitulo';
import { useEffect, useState } from 'react';
import { api } from '../api';

const initialNotepad = {
  id: 0,
  title: '',
  subtitle: '',
  content: '',
  created_at: '',
};

export function NotepadRoute() {
  const title = 'Notepad';
  const params = useParams();
  const navigate = useNavigate();
  const [notepad, setNotepad] = useState(initialNotepad);

  async function loadNotepad() {
    const response = await api.get(`/notepads/${params.id}`);
    const nextNotepad = response.data;
    setNotepad(nextNotepad);
  }

  useEffect(() => {
    loadNotepad();
  }, [params.id]);
  return (
    <div className='lg:w-[48rem] m-auto pt-7 mb-20'>
      <DivTitulo>{title}</DivTitulo>
      <DivCard>{notepad.title}</DivCard>
    </div>
  );
}
