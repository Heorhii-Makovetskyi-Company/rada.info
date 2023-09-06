module.exports = {
  root: true,
  // overrides: [{
  //   rules: {
  //     quoutes: ["error", "double"],
  //     semi: ["error", "never"],
  //   }
  // }],
  rules: {
    quoutes: ["error", "double"],
    semi: ["error", "never"],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint"],
};
