import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = dirname(__filename);

export const aquireTarget = async (...paths) => await import(resolve(__dirname, ...paths));

export const aquirePath = (...paths) => resolve(__dirname, ...paths);
