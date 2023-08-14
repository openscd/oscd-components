# `<oscd-textfield>` ![NPM](https://img.shields.io/badge/NPM-0.0.20-cb0001)

---

![oscd-textfield](screenshots/Chromium/baseline/oscd-textfield.png)
## Attributes

| Name              | Type    | Description                       |
| ----------------- | ------- | --------------------------------- |
| required          | boolean | Textfield is required             |
| nullable          | boolean | Textfield is nullable             |
| multipliers       | array   | Multipliers                       |
| multiplier        | string  | Multiplier                        |
| unit              | string  | Unit                              |
| maybeValue        | String  | Maybevalue                        |
| defaultValue      | String  | Default Value                     |
| reservedValues    | Array   | Reserved Values                   |
| suffix            | String  | Suffix                            |
| disabled          | boolean | Textfield is disabled             |
| helperPersistent  | boolean | Helper message is persistent      |
| value             | String  | Textfield Value                   |
| label             | String  | Textfield Label                   |
| helper            | String  | Helper Text                       |
| validationMessage | string  | Validation Message                |
| pattern           | String  | Textfield Pattern                 |
| minLength         | Number  | Minimum length of Textfield value |
| maxLength         | Number  | Maximum length of Textfield value |
| min               | Number  | Minimum of Textfield value        |
| max               | Number  | Maximum of Textfield value        |

## Css Properties

| Name                           | Default             | Description                                                                |
| ------------------------------ | ------------------- | -------------------------------------------------------------------------- |
| --oscd-theme-textfield-error   | --oscd-theme-error  | Color when errored of the underline, the outline, the caret and the icons. |
| --oscd-theme-textfield-primary | -oscd-theme-primary | Color when active of the underline, ripple, the outline, and the caret.    |