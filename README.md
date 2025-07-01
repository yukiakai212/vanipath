# vanipath

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

![Build Status][github-build-url]

> Get `__filename` and `__dirname` in both ESM and CJS using pure JavaScript – no native modules, no bundler hacks.

`vanipath` provides utilities to retrieve the equivalent of `__filename` and `__dirname` in both CommonJS and ESM contexts. It's designed for library authors who want compatibility across environments without native bindings or compiler tricks.

---

## 🚀 Installation

```bash
npm install vanipath
```

---


## 🛠 Usage

```js
import { filename, dirname } from 'vanipath';

console.log(filename()); // /absolute/path/to/current-file.js
console.log(dirname());  // /absolute/path/to
```

In CommonJS:

```js
const { filename, dirname } = require('vanipath');

console.log(filename());
console.log(dirname());
```

---

## ⚠️ Warning

Do not use relative traversal tricks like `path.join(dirname(), '../..')` — these may break in bundled environments, like when using `tsup`, `webpack`, or `Vercel`. Always resolve paths based on project root or absolute references.

---

## 🧪 Test

This project uses [Vitest](https://vitest.dev/):

```bash
npm test
# or
npx vitest run
```

---

## 📄 License

MIT License © 2025 [yukiakai](https://github.com/yukiakai212)



[npm-downloads-image]: https://badgen.net/npm/dm/vanipath
[npm-downloads-url]: https://www.npmjs.com/package/vanipath
[npm-url]: https://www.npmjs.com/package/vanipath
[npm-version-image]: https://badgen.net/npm/v/vanipath
[github-build-url]: https://github.com/yukiakai212/vanipath/actions/workflows/build.yml/badge.svg
