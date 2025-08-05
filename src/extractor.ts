'use strict';

const esm = (str: string): string | undefined => {
  const regex = /(file:\/\/\/?.*?):\d+:\d+/;
  const file = str.match(regex)?.[2];
  return file;
};
const cjs = (str: string): string | undefined => {
  const regex = /\((.*?):\d+:\d+\)/;
  const file = str.match(regex)?.[1];
  return file;
};
const cjsNon = (str: string): string | undefined => {
  const regex = /at (.*?):\d+:\d+/;
  const file = str.match(regex)?.[1];
  return file;
};
export { esm, cjs, cjsNon };
