module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    "airbnb-typescript",
  ],
  globals: {
    browser: true,
    document: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "import/core-modules": ["webdriverio", "loglevel"],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    createDefaultProgram: true,
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["test/**/*.ts"],
      rules: {
        "func-names": "off",
      },
    },
  ],
  plugins: [
    "@typescript-eslint",
    "@getify/proper-arrows",
    "import",
  ],
  rules: {
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "@getify/proper-arrows/this": ["error", "never-global"],
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "@typescript-eslint/no-throw-literal": "off",
    "comma-dangle": [
      "error", {
        functions: "never",
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
      },
    ],
    "default-case": "off",
    "@typescript-eslint/comma-dangle": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error"],
    "no-await-in-loop": "off",
    "no-plusplus": "off",
    "prefer-object-spread": "error",
    "import/no-unresolved": "error",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "import/max-dependencies": ["error", { max: 20 }],
    "import/no-mutable-exports": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "max-params": ["error", 7],
    "no-return-await": "error",
    curly: "error",
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error", "stroustrup"],
    indent: "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        MemberExpression: 1,
        SwitchCase: 1,
      },
    ],
    "no-console": "error",
    "no-buffer-constructor": "error",
    "linebreak-style": [
      "error",
      "unix",
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
    ],
    "@typescript-eslint/semi": [
      "error",
      "always",
    ],
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "always",
    ],
    complexity: [
      "error",
      13,
    ],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_id"],
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    "class-methods-use-this": [
      "off",
    ],
    "no-tabs": [
      "error",
    ],
    strict: [
      "error",
      "global",
    ],
    "react/jsx-filename-extension": 0,
  },
};
