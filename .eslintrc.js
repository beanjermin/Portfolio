module.exports = {
    env: {
        browser: true,
        es2021: true,
        globals: true,
        node: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "airbnb",
        "prettier",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier", "import", "jsx-ally"],
    rules: {
        "prettier/prettier": ["error"],
        "no-console": "off",
        "no-restricted-syntax": ["error"],
        "import/extensions": ["error", "never", { "jsx": "always" }],
        "react/prop-types": "off",
        "no-multi-str": "off"
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
