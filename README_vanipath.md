**`vanipath`** provides functions that act as direct replacements for Node.js's `__filename` and `__dirname`, working seamlessly in **both ESM and CJS** environments. It's designed for developers who need compatibility across different module systems.

✅ **Zero dependencies** — no bloat, no surprises  
✅ No native modules, and no build steps required  
✅ Especially useful in projects using cross-environment build tools like **tsup**, **vite**, or **esbuild**, where `__dirname` and `__filename` might not behave consistently or may require workarounds

> Say goodbye to ugly `import.meta.url` hacks — and no more `path.dirname(fileURLToPath(import.meta.url))` copy-paste! 😎