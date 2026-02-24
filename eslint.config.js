import js from "@eslint/js";

export default [
  {
    ignores: ["node_modules/", ".git/"],
  },
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        crypto: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      indent: ["error", 2],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      eqeqeq: ["error", "always"],
      curly: "error",
    },
  },
];
