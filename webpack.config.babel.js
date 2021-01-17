
import { resolve } from 'path';

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


const aquireTarget = inTarget => {
  console.log(require(resolve(__dirname, 'webpack', inTarget, `index.js`)))
  return require(resolve(__dirname, 'webpack', inTarget, `index.js`))
}

const configuration =
  target === 'all'
    ? [
        aquireTarget('style').config,
        aquireTarget('client').config,
        aquireTarget('server').config,
      ]
    : [aquireTarget(target).config];

export default [...flatten(configuration)];
