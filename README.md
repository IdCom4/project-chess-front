# Project Chess Front

This is the front-end of the Project Chess

## Quick Start

```sh
# clone the project
$> git clone https://github.com/IdCom4/project-chess-front

# create the env file matching your needs
# and fill all the required values
$> cp ./envs/.env.exemple ./envs/.env.development.local

# start the application
$> pnpm run start:dev
```

## Tech Stack

It currently stands as:

- 🫀: **[React](https://react.dev/reference/react)**
- 🛠 : **[Vite](https://vite.dev/guide/)**
- 🧬: **[Typescript](https://www.typescriptlang.org/docs/)**
- 👂: **[SWC](https://swc.rs/)**
- ⛔️: **[ESLint](https://eslint.org/docs/latest/)**
- 💎: **[Prettier](https://prettier.io/docs/)**
- 📦: **[pnpm](https://pnpm.io/)**
- 🧨: **[Vitest](https://vitest.dev/guide/)** + **[React Testing Library](https://testing-library.com/)** + **[Jest](https://jestjs.io/fr/docs/getting-started)**

## Architecture

This is the chosen architecture standard for this project: **[BulletProof](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)**

Use its documentation as reference to better understand/update the project's code base.

## Usage

Read the \***\*package.json\*\*** for the exhaustive list of commands, but here are the main ones

### Start the application

```sh
# starts in development environment
$> pnpm run start:dev

# starts in staging environment
$> pnpm run start:staging

# starts in production environment
$> pnpm run start:prod
```

### Test the application

```sh
# runs the tests
$> pnpm run test

# shows the tests coverage
$> pnpm run test:coverage
```

### Lint the application

```sh
# checks the validity
$> pnpm run lint

# fixes what it can
$> pnpm run lint:fix
```

### Build the application

```sh
# builds for development environment
$> pnpm run build:dev

# builds for staging environment
$> pnpm run build:staging

# builds for production environment
$> pnpm run build:prod
```
