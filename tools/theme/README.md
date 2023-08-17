# OSCD Themer

This script creates CSS and ES variables for a Theme for OSCD Components.

It looks for Design Tokens in the `theme/[THEME_NAME]` folder.
The default theme name is `OSCD`.

---
### Usage

You can run the script with the following command:

```bash
npm run build
```

If you want to create your custom Theme, you can give the name as an argument:
```bash
npm run build -- --theme=MyCustomTheme
```