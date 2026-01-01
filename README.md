# vanipath

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

[![Build Status][github-build-url]][github-url]
[![codecov][codecov-image]][codecov-url]

> Drop-in replacement for `__filename` and `__dirname` in both ESM and CommonJS – pure JavaScript, no native bindings.

**`vanipath`** provides functions that act as direct replacements for Node.js's `__filename` and `__dirname`, working seamlessly in **both ESM and CJS** environments. It's designed for developers who need compatibility across different module systems.
No native modules, and no build steps required. Just import and use like the originals.

---
## Features

- ✅ **Zero dependencies** — no bloat, no surprises  
- ✅ No native modules, and no build steps required  
- ✅ Especially useful in projects using cross-environment build tools like **tsup**, **vite**, or **esbuild**, where `__dirname` and `__filename` might not behave consistently or may require workarounds

---

## Compatibility

| Runtime   | Support  | Notes                                   |
|-----------|--------- |-----------------------------------------|
| Node.js   | ✅       | Full support (ESM & CJS)                |
| Deno      | ✅       | Full support (ESM & CJS)                |
| Bun       | ✅       | Full support (ESM & CJS)                |

---

## Installation

```bash
#nodejs
npm install vanipath
pnpm add vanipath
#bun
bun add vanipath
#deno
deno add npm:vanipath
```

---


## Usage

In ESM:

```js
import { filename, dirname } from 'vanipath';

console.log(filename()); // equivalent to __filename
console.log(dirname());  // equivalent to __dirname
```

In CommonJS:

```js
const { filename, dirname } = require('vanipath');

console.log(filename()); // equivalent to __filename
console.log(dirname());  // equivalent to __dirname
```

Works exactly like native `__filename` and `__dirname`, even in environments where they’re not available (like ESM modules).

---


## Test

This project uses [Vitest](https://vitest.dev/):

```bash
npm test
# or
npx vitest run
```

---

## Changelog

See full release notes in [CHANGELOG.md][changelog-url]

---

## License

MIT License © 2025 [yukiakai](https://github.com/yukiakai212)


---

[npm-downloads-image]: https://badgen.net/npm/dm/vanipath
[npm-downloads-url]: https://www.npmjs.com/package/vanipath
[npm-url]: https://www.npmjs.com/package/vanipath
[npm-version-image]: https://badgen.net/npm/v/vanipath
[github-build-url]: https://github.com/yukiakai212/vanipath/actions/workflows/build.yml/badge.svg
[github-url]: https://github.com/yukiakai212/vanipath/
[codecov-image]: https://codecov.io/gh/yukiakai212/vanipath/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/yukiakai212/vanipath
[changelog-url]: https://github.com/yukiakai212/vanipath/blob/main/CHANGELOG.md
