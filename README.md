# ts-runtime evaluation

Was looking to use [ts-runtime](https://github.com/fabiandev/ts-runtime) to generate Javascript with the Typescript checks still in place. Tried the default example on the [ts-runtime playground](https://fabiandev.github.io/ts-runtime/) and got the following outcome:

## Build
```sh
npx tsr index.ts -C '{"strictNullChecks":true,"target":"ES2015"}' -f
```

Output was:
```
ℹ ts-runtime v0.3.0
✔ Processing (758ms)
✔ Scanning (13ms)
✔ Transforming (9ms)
✔ Emitting (42ms)
✔ Done in 822ms.
```

## Run
```sh
node index.js 
```

Output was:
```
node:internal/process/esm_loader:74
    internalBinding('errors').triggerUncaughtException(
                              ^

Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '/tmp/tmp.HBSCHHJey5/node_modules/ts-runtime/lib' is not supported resolving ES modules imported from /tmp/tmp.HBSCHHJey5/index.js
Did you mean to import ts-runtime/lib/index.js?
    at new NodeError (node:internal/errors:259:15)
    at finalizeResolution (node:internal/modules/esm/resolve:303:17)
    at moduleResolve (node:internal/modules/esm/resolve:742:10)
    at Loader.defaultResolve [as _resolve] (node:internal/modules/esm/resolve:853:11)
    at Loader.resolve (node:internal/modules/esm/loader:85:40)
    at Loader.getModuleJob (node:internal/modules/esm/loader:229:28)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:51:40)
    at link (node:internal/modules/esm/module_job:50:36) {
  code: 'ERR_UNSUPPORTED_DIR_IMPORT',
  url: 'file:///tmp/tmp.HBSCHHJey5/node_modules/ts-runtime/lib'
}
```

