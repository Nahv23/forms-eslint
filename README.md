# Forms, eslint & prettier

## 1. Eslint & prettier

```
npx create-react-app my-app
```

Creamos un nuevo proyecto de React. Por defecto, nos viene instalado en el package.json una configuración de eslint para react.

```
"eslintConfig": {
  "extends": "react-app"
},
```

Vamos a añadir una configuración para poder formatear nuestro código al guardar o al cambiar de archivo.

1. Instalamos los plugins de [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) en vscode.

2. Creamos en la raíz del proyecto un archivo `.eslintrc` que será nuestra propia configuración.

La configuración básica en este punto del archivo sería esta:

```
{
  "extends": ["react-app"],
  "rules": {
    "no-console": 2,
    "quotes": [2, "single", { "avoidEscape" true }]
  }
}
```

3. Añadimos los paquetes de prettier como dependencia de desarrollo

```
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

4. Añadimos la configuración recomendada del plugin de prettier.

```
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "no-console": 2,
    "quotes": ["error", "single", { "avoidEscape": true }]
  }
}
```

5. Creamos un archivo .prettierrc

```
{
  "singleQuote": true,
  "jsxSingleQuote": true
}
```

6. Cambiamos las preferencias de vscode: Code -> Preferences -> Settings -> Botón {}

```
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"],
  "prettier.singleQuote": true,
  "files.autoSave": "onFocusChange"
}
```
