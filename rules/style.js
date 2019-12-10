module.exports = {
  rules: {
    camelcase: ['error', { properties: 'always' }],
    curly: ['error', 'all'],
    'import/order': ['error',  {
      groups: ["builtin", "external", ["parent", "sibling", "index"]],
      'newlines-between': 'always'
    }]
  },
}
