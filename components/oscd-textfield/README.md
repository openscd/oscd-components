# `<oscd-textfield>` ![NPM](https://img.shields.io/badge/NPM-0.0.20-cb0001) ![Status](https://img.shields.io/badge/stable-66bf3b)

---

Oscd Textfield is a custom WebComponent based on the [`@material/mwc-textfield`](https://www.npmjs.com/package/@material/mwc-textfield).
The textfield is used for XML input and can be optional.

## Example

```html
<oscd-textfield label="Username" value="John Doe">
</oscd-textfield>
```
---

### Attributes

| Name | Type | Description |
| ---- | ---- | ----------- |

### Css Properties

| Name                                          | Default                             | Description                                                                |
| --------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| --oscd-theme-textfield-error                  | --oscd-theme-error                  | Color when errored of the underline, the outline, the caret and the icons. |
| --oscd-theme-textfield-primary                | --oscd-theme-primary                | Color when active of the underline, ripple, the outline, and the caret.    |
| --oscd-theme-textfield-primary-surface        | --oscd-theme-primary-surface        | Color of the Switch track                                                  |
| --oscd-theme-textfield-primary-surface-active | --oscd-theme-primary-surface-active | Color of the Switch Hover state                                            |
| --oscd-theme-textfield-primary-active         | --oscd-theme-primary-active         | Color of the Switch Hover state                                            |
| --oscd-theme-textfield-fill                   |                                     | Color of the textfield Fill                                                |
| --oscd-theme-textfield-ink                    |                                     | Color of the textfield Text                                                |
| --oscd-theme-textfield-line                   |                                     | Color of the textfield Line                                                |