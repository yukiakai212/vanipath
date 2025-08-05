'use strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { esm, cjs, cjsNon } from './extractor.js';

const filename = (depth = 2): string | null => {
  const e = new Error();
  const stack = e.stack?.split('\n')[depth];
  if (!stack) return null;
  const file = esm(stack) || cjs(stack) || cjsNon(stack);
  if (process.env?.DEBUG === 'vanipath') console.log('debug stack', stack);
  return file ? (file.startsWith('file') ? fileURLToPath(file) : file) : null;
};
const dirname = (): string | null => {
  const file = filename(3);
  return file ? path.dirname(file) : null;
};
export { filename, dirname };
