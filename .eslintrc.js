module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/eslint-config-prettier",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-irregular-whitespace": "off",
  },
  overrides: [
    {
      files: [
        "**/*.js",
        "**/*.jsx",
        "**/*.ts",
        "**/*.tsx",
        "**/*.vue",
      ],
    },
  ],
  settings: {
    "import/resolver": {
      typescript: [],
    }
  }
};
