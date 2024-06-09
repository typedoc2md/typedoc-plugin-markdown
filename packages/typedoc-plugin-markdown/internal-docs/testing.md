---
title: Testing guide
description: Guidance of running tests and creating fixtures.
---

# Testing

## Running tests

```bash
npm run test
```

If you require to update the snapshots run the following command:

```bash
npm run test:update
```

## Test Fixtures

A series of snapshot tests are used to ensure the output of the plugin is consistent.

- Example code for fixtures are located at `/test/fixtures/src`.
- Fixtures output scenarios are setup using a config file (`/test/fixtures/config.ts`) that provides a mechanism to easily provide a combination of options.
