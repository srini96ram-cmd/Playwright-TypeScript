module.exports = {
  default: {
    loader: ['ts-node/esm'],

    import: [
      'features/support/**/*.ts',
      'features/step-definitions/**/*.ts'
    ],

    paths: [
      'features/**/*.feature'
    ],

    format: ['progress'],
    publishQuiet: true
  }
};