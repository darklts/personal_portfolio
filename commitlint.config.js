module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': async () => [0, 'always', 110],
    'scope-enum': async () => [
      2,
      'always',
      [
        'docs',
        'config',
        'storybook',
        'merge-requester',
        'core',
        'ui',
        'api',
        'database',
      ],
    ],
  },
}
