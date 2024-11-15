# S1ti

A custom discord bot that you could host yourself.

## How to Run

### Requirements

1. Bun
2. A Discord server
3. A PostgreSQL instance

### Scripts to run

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

OR if you run as dev

```bash
bun dev
```

Other than that if you want to deploy commands

```bash
bun deploy-commands
```

### Drizzle migrations

To generate Drizzle migrations

```bash
bun drizzle-kit generate
```

And then to migrate

```bash
bun drizzle-kit migration
```

For more information see [Drizzle's documentation](https://orm.drizzle.team/docs/overview)