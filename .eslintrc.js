module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'json',
    'markdown'
  ],
  'overrides': [
    {
      'files': ['**/*.md'],
      'processor': 'markdown/markdown'
    },
    {
      'files': ['**/*.md/*.js'],
      'rules': {
      }
    }
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  },
  'settings': {
    'react': {
      'version': 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  }
};
