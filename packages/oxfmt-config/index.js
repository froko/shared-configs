const config = {
  semi: false,
  singleQuote: true,
  bracketSameLine: true,
  printWidth: 80,
  sortImports: {},
  overrides: [
    {
      files: ['*.md'],
      options: {
        proseWrap: 'always',
      },
    },
  ],
}

export default config
