import path from 'node:path';

const normalizePath = (p: string): string => path.posix.normalize(p.replace(/\\/g, '/'));
export { normalizePath };
