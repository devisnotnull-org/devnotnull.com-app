
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const target = process.env.TARGET || 'all';

const flatten = input => {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
};

const aquireTarget = async (inTarget) => await import(resolve(__dirname, 'webpack', inTarget, `index.js`));

console.log(`Building target: ${target}`);
console.log(`Building targets: ${target === 'all' ? 'style, client, server' : target}`);

const configuration =
  target === 'all'
    ? [
        await aquireTarget('style').config,
        await aquireTarget('client').config,
        await aquireTarget('server').config,
      ]
    : [await aquireTarget(target).config];


export default [...flatten(configuration)];
