//bruh!
import { dirname, normalizePath } from './src/index.js'; // # const { dirname, normalizePath } = require("./dist/index.cjs");

const failedMessage = 'FAILED: ';
if (dirname() !== normalizePath(import.meta.dirname)) throw new Error(failedMessage + dirname());

console.log('Passed non function');
function normal() {
  if (dirname() !== normalizePath(import.meta.dirname)) throw new Error(failedMessage + dirname());
  console.log('Passed function');
}
normal();

const arrow = () => {
  if (dirname() !== normalizePath(import.meta.dirname)) throw new Error(failedMessage + dirname());
  console.log('Passed arrow function');
};
arrow();
setTimeout(() => {
  if (dirname() !== normalizePath(import.meta.dirname)) throw new Error(failedMessage + dirname());
  console.log('Passed calback function');
}, 1);

(() => {
  if (dirname() !== normalizePath(import.meta.dirname)) throw new Error(failedMessage + dirname());
  console.log('Passed anonymous function');
})();
