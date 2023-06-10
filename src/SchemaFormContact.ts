import { z } from 'zod';

const nome = z.string().min(3, { message: 'Digite pelo menos 3 caracteres' });
const email = z
  .string()
  .min(7, { message: 'Digite pelo menos 7 caracteres' })
  .email({ message: 'Digite um e-mail válido' });
const mensagem = z
  .string()
  .min(30, { message: 'Digite pelo menos 30 caracteres' });

export const SchemaFormContact = z.object({
  nome,
  email,
  mensagem,
});
