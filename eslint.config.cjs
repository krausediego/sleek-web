/* eslint-disable @typescript-eslint/no-var-requires */
const { FlatCompat } = require("@eslint/eslintrc");
const typeScriptEsLintPlugin = require("@typescript-eslint/eslint-plugin");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: typeScriptEsLintPlugin.configs.recommended,
});

module.exports = [
  ...compat.config({
    env: { browser: true, es2022: true },
    extends: [
      "plugin:import/typescript",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint",
      "prettier",
      "import",
      "import-helpers",
      "react-refresh",
    ],
    rules: {
      "import/no-extraneous-dependencies": "off",
      "no-empty-function": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "no-use-before-define": "off",
      curly: ["error", "all"],
      "no-underscore-dangle": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          tsx: "never",
          ts: "never",
          "": "never",
        },
      ],
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: [
            ["absolute"],
            ["module"],
            ["/^(@|~)/"],
            ["parent", "sibling", "index"],
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "_",
        },
      ],
      "class-methods-use-this": "off",
      "no-useless-constructor": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "import/no-unresolved": "off",
      "@typescript-eslint/no-namespace": "off",
      "import/no-cycle": "off",
      camelcase: "off",
    },
  }),
];
