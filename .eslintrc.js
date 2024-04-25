module.exports = {
    root: true,
    plugins: ['import'],
    rules: {
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: 'react**',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'before',
                    }
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
            }
        ],
    },
    extends: ['./eslintrc-react'],
};