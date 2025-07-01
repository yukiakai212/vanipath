'use strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = (depth = 2) => {
  const e = new Error();
  const stack = e.stack.split('\n')[depth];
  const regex = /(file:\/\/\/?.*?):\d+:\d+/;
  const regex2 = /at (.*?):\d+:\d+/;
  const file = stack.match(regex)?.[2] || stack.match(regex2)?.[1];
  return file ? (file.startsWith('file') ? fileURLToPath(file) : file) : null;
};
const dirname = () => {
  const file = filename(3);
  return file ? path.dirname(file) : null;
};
export { filename, dirname };
