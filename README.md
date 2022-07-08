<h2 align="center">Sort</h2>

## Description

    Sort is a simple application that fetches data from a GraphQL API and presents them.

## Decisions and Shortcuts

<h2 align='center'>Decisions</h2>

- I used a React UI library(ChakraUI) to make styling faster.

- While looking at the wireframe, I decided to make the box close to the data show the id of whatever was displayed
- Google font for font
- A theme file to contain resuable colors and so on

<h2 align='center'>Shortcuts</h2>

- I was taking too long to find a GraphQL server that can serve data as I want, so I built a simple GraphQL server using NodeJs and Express (hosted on Heroku), I also mocked the data using Mockaroo. You can find the repo here [The Github Repo](https://github.com/ikechukwu-peter/mock)
- Instead of building a loader component from scratch I built mine ontop of an npm package react-load-spinner.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn dev

# build
$ yarn build

# preview
$ yarn preview
```

## Test

```bash
# unit tests
$ yarn run test

```

## Stay in touch

- Author - [Ikechukwu Peter](https://pete.vercel.app)
- Twitter - [@pete_iyke](https://twitter.com/pete_iyke)
