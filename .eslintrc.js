module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended", 
    "plugin:prettier/recommended"
    //"prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "sourceType": "module",
    "project": "./tsconfig.json" 
  },
  root: true, 
  rules: {}
}