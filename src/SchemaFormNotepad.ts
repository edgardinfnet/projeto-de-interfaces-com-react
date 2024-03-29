import { z } from 'zod';

const title = z.string().min(3, { message: 'Digite pelo menos 3 caracteres' });
const subtitle = z
  .string()
  .min(15, { message: 'Digite pelo menos 15 caracteres' });
const content = z
  .string()
  .min(30, { message: 'Digite pelo menos 30 caracteres' });

export const SchemaFormNotepad = z.object({
  title,
  subtitle,
  content,
});
