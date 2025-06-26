# Library App

A simple digital library built with React, TypeScript, and Tailwind CSS v4.

Users can add, edit, remove, and mark books as read/unread. The app uses localStorage to persist data and offers a reset button to restore the default book list.

---

## Live Preview

You can view the deployed app on GitHub Pages:

https://caimanbrujo.github.io/library-app

---

## Features

- Add new books with title, author, pages, and read status
- Edit existing books
- Remove books
- Mark books as read or unread
- Reset library to default
- Data persistence with localStorage
- Fully responsive layout using Tailwind CSS v4

---

## Stack

- React 19
- TypeScript 5.8
- Vite 6
- Tailwind CSS v4
- ESLint 9
- Prettier 3

---

## Project Structure

```
library-app/
├── public/
├── src/
│   ├── components/
│   │   ├── BookCard.tsx
│   │   ├── BookEdit.tsx
│   │   ├── BookForm.tsx
│   │   ├── BookList.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── data/
│   │   └── initialBooks.ts
│   ├── reducers/
│   │   └── bookReducer.ts
│   ├── types/
│   │   └── Book.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── dist/
├── .gitattributes
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Setup

```
git clone https://github.com/CaimanBrujo/library-app.git
cd library-app
npm install
```

---

## Scripts

```
npm run dev        # Start development server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
npm run build      # Build for production
npm run preview    # Preview production build
```

---
