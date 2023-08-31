# Oscd Components

Oscd Components are the building blocks to create an OpenSCD Plugin. OSCD Components are custom WebComponents built in Lit, accessable in any modern browser

> Check out the getting started guide or the documentation

---

## Components



| Name                                                                                                                                                 | Status | Version |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| [@openscd/oscd-action-icon](./components//Users/pascalwilbrink/Documents/Workspaces/Alliander/components/oscd/components/oscd-action-icon/README.md) | WIP    | 0.0.1   |
| [@openscd/oscd-action-pane](./components//Users/pascalwilbrink/Documents/Workspaces/Alliander/components/oscd/components/oscd-action-pane/README.md) | WIP    | 0.0.1   |
| [@openscd/oscd-button](./components//Users/pascalwilbrink/Documents/Workspaces/Alliander/components/oscd/components/oscd-button/README.md)           | WIP    | 0.0.1   |
| [@openscd/oscd-checkbox](./components//Users/pascalwilbrink/Documents/Workspaces/Alliander/components/oscd/components/oscd-checkbox/README.md)       | WIP    | 0.0.1   |
| [@openscd/oscd-dialog](./components//Users/pascalwilbrink/Documents/Workspaces/Alliander/components/oscd/components/oscd-dialog/README.md)           | WIP    | 0.0.1   |
| [@openscd/oscd-select](./components//Users/pascalwilbrink/Documents/Workspaces/Alliander/components/oscd/components/oscd-select/README.md)           | WIP    | 0.0.1   |
| [@openscd/oscd-switch](./components//Users/pascalwilbrink/Documents/Workspaces/Alliander/components/oscd/components/oscd-switch/README.md)           | WIP    | 0.0.1   |
| [@openscd/oscd-textfield](./components//Users/pascalwilbrink/Documents/Workspaces/Alliander/components/oscd/components/oscd-textfield/README.md)     | stable | 0.0.20  |

---

## Scripts



| Name                         | Description                                                      | Properties |
| ---------------------------- | ---------------------------------------------------------------- | ---------- |
| npm run generate:component   | Scaffolds a new component                                        | See CLI    |
| npx nx storybook <component> | Run Storybook for a specific component                           | component  |
| npm run build:all            | Builds all the components                                        | -          |
| npx nx graph                 | Creates a visual graph for all the component dependencies        | -          |
| npm run documentation        | Updates the documentation per component and the global README.md | -          |