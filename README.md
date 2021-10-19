# famcs-react-course

This repository contains a sample project and materials within the course
"Developing in the JavaScript Programming Language" at the FAMCS of BSU.

## Getting started

First, you need to prefill `.env.local` with needed values, if you do not have one.

For example,

```shell
cp .env .env.local
```

Then install dependencies:

```shell
yarn
```

After these steps, you can run the application by

```shell
yarn start
```

## Available Scripts

In the project directory, you can run:

- `yarn analyze` - generates report with bundle analysis (require `yarn build`)
- `yarn build` - builds the production build
- `yarn eject` - [ejects CRA](https://create-react-app.dev/docs/available-scripts/#npm-run-eject)
- `yarn lint` - runs [ESLint](https://eslint.org) against all `js` code
- `yarn pre-commit` - runs checks before each commit
- `yarn prettier` - entry point for [`prettier`](https://prettier.io)
- `yarn prepare` - automatically enable git hooks after install
- `yarn start` - runs the application in development mode
- `yarn stylelint` - runs [Stylelint](https://stylelint.io) for all styles
  (both `css` and [`css-in-js`](https://styled-components.com))
- `yarn test` - launches the test runner in the interactive watch mode
