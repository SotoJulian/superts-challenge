# superts-challenge

## :robot: Technologies

- Nodejs with Typescript
- PostgreSQL or MongoDB
- Docker

## :rocket: Config

`npm init -y`

`tsc --init`

### Inside `tsconfig.json`

Tal cual su nombre lo describe, `tsconfig` nos provee de numerosas configuraciones comentadas, de las cuales, sólo tomaremos en cuenta para esta guía las siguientes:

- `moduleResolution`

Indica la estrategia que Typescript tomará para resolver los modulos, por defecto usaremos: `moduleResolution: node`

- `outDir`

Hacia que directorio se emitirán los archivos transpilados una vez ejecutemos Typescript.

En este proyecto usaremos: `outDir: ./dist/src/`

- `include`

Directorios que el compilador tendra en cuenta a la hora de transpilar a Javascript.

- `exclude`

Directorios que el compilador no tendra en cuenta.

> Estos dos ultimos no se encuentran comentados en `tsconfig.json`

En resumen, include y exclude deberian [verse asi](https://imgur.com/KRlXC7Y)

### Inside `package.json`

Antes de iniciar el proyecto, debemos establecer en los scripts un parametro de lanzamiento que transpile nuestro código de Typescript a Javascript (siguiendo la configuracion de `outDir`) asegurándonos de siempre que usemos ya sea `npm run start` o `npm run dev` este proceso lo realice automáticamente.

Ejemplo `scripts`

`"start": "tsc && node ./dist/src/index.js"`

Aqui el comando `tsc` compila siguiendo la configuracion de `tsconfig.json` y genera nuestro directorio `./dist/..` o bien, lo actualiza.

Los dos ampersand `&&` representan el operador logico AND. Este funciona para concatenar distintos parametros de lanzamiento.

Por otro lado `node ./dist/src/index.js` ejecuta el codigo generado.

> Existen otras formas de automatizar este proceso y aun mejor, complementarlo con nodemon, usando `tsc --watch`. De momento cada vez que actualicemos el codigo, ejecutaremos `npm run start`

## 🗺️ Background

Trataremos un problema simple y bastante genérico. Un registro de usuarios, el cual, deberá crearse en base al paradigma orientado a objetos, teniendo en cuenta entidades y atributos que se necesitarán para orquestar el funcionamiento de nuestro servicio.

### - `Entity`

- User

### - `Attributes`

- username
- password
- creation

## :writing_hand: Application rules

1. Los atributos username y password, deberán tener una validación respecto a sus caracteres.

2. Aunque parezca obvio, no pueden existir dos usuarios con el mismo username.

3. El atributo creation, debe contener la fecha exacta del momento en el que se creo la cuenta.

4. `POST /signup` será el endpoint en el que trabajará el servicio.

5. `GET /users` traerá todos los usuarios creados hasta el momento y con sus atributos incluidos, excepto la password.

6. El atributo password dentro del servicio debe ser encriptado antes de guardarse en el sistema de persistencia.

## 📣 Clarification

Este material se encuentra sujeto a cambios, incluyendo la complejidad y los requerimientos.

La finalidad que persigue es alcanzar conceptos cercanos a tecnicas como el DDD, Hexagonal Architectures y Domain Protection.

> ⚠️ En esta fase se evidenciarán los errores de acoplamiento.

<br>

## By: odev :smile:
