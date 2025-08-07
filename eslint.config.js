export default [
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
        },
    },
];