# Project

Rails API backend service for the social media post scheduler application.

## Requirements

- Ruby and Bundler
- Optional: `mise` for managing Ruby and task shortcuts

## Setup

```sh
bundle install
bin/rails db:prepare
```

If you use `mise`, you can install gems with:

```sh
mise run bundle:install
```

## Run The API

Start the Rails server on port 3000:

```sh
bin/rails server
```

With `mise`:

```sh
mise run server
```

## Run Tests

```sh
bin/rails test
```

With `mise`:

```sh
mise run test
```
