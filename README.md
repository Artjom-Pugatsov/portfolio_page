# Portfolio Page

A personal portfolio built with Vue 3 and TypeScript. Displays project tiles loaded from a JSON file, each linking to the project and showing some additional details.

## Stack

- Vue 3 + TypeScript

## Dev

```sh
npm install
npm run dev
```

## Adding a project

1. Drop a screenshot into `public/images/`
2. Add an entry to `src/data/projects.json`

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "image": "/images/screenshot.jpg",
  "url": "https://someUrl.com",
  "shortDescription": "One line shown on the tile",
  "longDescription": "Full description shown after pressing i"
}
```

## Build

```sh
npm run build
```
