# Project

This repo is a small monorepo with:

- `backend`: Rails API
- `frontend`: React app using Bun and Vite

## Setup with mise

This guide assumes you're using mise with the experimental monorepo feature. Setup can be accomplished without mise directly in each project.

### mise requirements
- Install `mise`
- Enable experiment flag. Use `MISE_EXPERIMENTAL=1` in your shell when using monorepo tasks.

## Initial Setup

From the repo root:

```sh
mise trust
mise install
```

Create the frontend env file:

```sh
cp frontend/.env.example frontend/.env
```

Install app dependencies:

```sh
MISE_EXPERIMENTAL=1 mise //backend:bundle:install
MISE_EXPERIMENTAL=1 mise //frontend:install
```

Prepare the backend database:

```sh
cd backend && bin/rails db:prepare
```

## Run The Apps

Start the Rails API:

```sh
MISE_EXPERIMENTAL=1 mise //backend:server
```

Start the frontend dev server in another terminal:

```sh
MISE_EXPERIMENTAL=1 mise //frontend:dev
```

The frontend is configured to call the backend at `http://localhost:3000`.

## Useful Commands

With mise a single command can run the task across all projects. For example: lint, install, and tests.
```sh
MISE_EXPERIMENTAL=1 mise //...:lint
MISE_EXPERIMENTAL=1 mise //...:install
MISE_EXPERIMENTAL=1 mise //...:test
```
