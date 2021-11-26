module.exports = {
  createNamingConventionConfig,
  createNamingConventionOptions: createOptions,
  addReactComponentNamingConvention,
}

function createNamingConventionConfig({
  allowedNames = [],
  options = createOptions(),
} = {}) {
  const filter = createFilter({ allowedNames })

  const commonProps = { filter }

  const addCommonProps = (options) =>
    options.map((option) => ({ ...option, ...commonProps }))

  return ['error', ...addCommonProps(options)]
}

function createOptions() {
  return [
    {
      selector: 'default',
      format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
    },

    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },

    { selector: 'memberLike', format: ['strictCamelCase'] },
    {
      selector: 'enumMember',
      format: ['PascalCase'],
    },

    { selector: 'function', format: ['strictCamelCase'] },

    {
      selector: 'variable',
      format: ['strictCamelCase', 'UPPER_CASE'],
    },
    {
      selector: 'variable',
      modifiers: ['unused'],
      format: ['strictCamelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
    },

    { selector: 'parameter', format: ['strictCamelCase'] },
    {
      selector: 'parameter',
      modifiers: ['unused'],
      format: ['strictCamelCase', 'PascalCase'],
      leadingUnderscore: 'allow',
    },
  ]
}

function addReactComponentNamingConvention(options) {
  return [
    ...options.map((option) =>
      ['function', 'variable', 'parameter'].includes(option.selector)
        ? {
            ...option,
            format: [...option.format, 'PascalCase'],
          }
        : option,
    ),
    {
      selector: 'typeProperty',
      format: ['strictCamelCase', 'PascalCase'],
    },
  ]
}

function createFilter({ allowedNames: customAllowedNames }) {
  const predefined = ['__html', 'Provider', 'Consumer', 'Component']
  const allowedNames = [...predefined, ...customAllowedNames]

  const regex = `^(${allowedNames.join('|')})$`

  return {
    regex,
    match: false,
  }
}
