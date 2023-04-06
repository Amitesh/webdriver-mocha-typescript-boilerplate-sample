module.exports = {
    // parser: "babel-eslint",
    env: {
        browser: true,
        node: true,
    },
    overrides: [
        {
            files: ['*.ts', '*.json'],
            parser: '@typescript-eslint/parser',
            plugins: ["@typescript-eslint"],
            parserOptions: {
                project: ['tsconfig.json'],
                createDefaultProgram: true
            },
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            rules: {
                strict: 0,
                "@typescript-eslint/no-var-requires": 0,
                "@typescript-eslint/explicit-module-boundary-types": 0,
                "@typescript-eslint/no-explicit-any": 0,
                "@typescript-eslint/no-inferrable-types": 0,
                "@typescript-eslint/no-extra-semi": 0,
                "@typescript-eslint/no-unused-vars": 0,
                "@typescript-eslint/ban-types": 0,
                "@typescript-eslint/no-empty-function": 0,
                "@typescript-eslint/no-this-alias": 0,
                "@typescript-eslint/no-empty-interface": 0,
                "prefer-const": 0,
                "no-var": 0,
                "no-useless-catch": 0,
                "no-useless-escape": 0,
                "no-self-assign": 0,
                "no-unsafe-optional-chaining": 0,
                "no-mixed-sapces-and-tabs": 0,
                "prefer-spread": 0,
                "prefer-rest-params": 0,
                "no-case-declarations": 0,
                "no-prototype-builtins": 0,
                "no-unexpected-multiline": 0,
                "no-irregular-whitespace": 0,
                "no-unsafe-finally": 0,
                "no-unused-labels": 0,
                "no-empty": 0,
                "no-dupe-keys": 0
            }
        }
    ]
}