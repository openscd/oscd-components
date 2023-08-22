# `<oscd-action-pane>` ![NPM](https://img.shields.io/badge/NPM-0.0.1-cb0001) ![Status](https://img.shields.io/badge/WIP-3b72bf)

---



## Example

```html
<oscd-action-pane> </oscd-action-pane>
```

---

### Attributes

| Name        | Type    | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| label       | string  | Caption text, displayed in the header                         |
| icon        | string  | Icon name, displayed unless the "icon" slot is filled         |
| secondary   | boolean | Color header with Secondary theme color while focus is within |
| highlighted | boolean | Highlight pane with dotted outline                            |
| level       | number  | Nesting level, default (closes pane ancestors level) + 1      |

### Css Properties

| Name                                | Default                 | Description                        |
| ----------------------------------- | ----------------------- | ---------------------------------- |
| --oscd-action-icon-theme-primary    | --oscd-theme-primary    | Color for border on even levels.   |
| --oscd-action-icon-theme-on-primary | --oscd-theme-on-primary | Pane color for the uneven levels.  |
| --oscd-action-icon-theme-secondary  | --oscd-theme-secondary  | Color for border on uneven levels. |
| --oscd-action-pane-theme-surface    | --oscd-theme-surface    | Pane color for the even levels.    |
| --oscd-action-icon-theme-on-surface | --oscd-theme-on-surface | Icon and label color.              |
| --oscd-action-icon-theme-font       | --oscd-theme-font       | Font for label.                    |