# GitHub Actions
OSCD-Components make use of GitHub Actions. 
There are multiple GitHub actions with a variety of goals.

## Workflows
| Job            | File                                                             | Description                                     |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| build          | [workflows/build.yaml](./workflows/build.yaml)                   | Builds all the projects                         |
| test           | [workflows/test.yaml](./workflows/test.yaml)                     | Tests all the projects                          |
| release-please | [workflows/release-please.yaml](./workflows/release-please.yaml) | Creates a release for every project (if needed) |