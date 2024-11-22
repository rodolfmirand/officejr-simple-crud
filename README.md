# simple-crud-officejr

Libs e configurações:
npm init -y
npm install typescript ts-node
npx tsc --init
npm install express @types/express
npm install uuid @types/uuid
npm install ts-node-dev
npm install knex @types/knex
npm install mysql

configuração tsconfig.json

{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */

    /* Emit */
    "outDir": "./",                                   /* Specify an output folder for all emitted files. */

    /* Interop Constraints */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
  },
  "include": [
    "src",
    "test"
  ]
}
