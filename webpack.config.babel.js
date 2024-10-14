import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const target = process.env.TARGET || 'all';

const __dirname = dirname(fileURLToPath(import.meta.url));

const aquireTarget = async (inTarget) => {
  const module = await import(resolve(__dirname, 'webpack', inTarget, `index.mjs`));
  return module;
};

console.log("111111111")
console.log("111111111")
console.log("111111111")
console.log("111111111")
console.log("111111111")

console.log("configuration")
console.log("configuration")
console.log(await aquireTarget('client'))

const configuration =
  target === 'all'
    ? [
        await aquireTarget('client').config,
        await aquireTarget('server').config,
      ]
    : [await aquireTarget(target).config];


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

export default [...flatten(configuration)];
