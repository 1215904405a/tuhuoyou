export default {
  input: 'src/entry.js',
  output: [{
    file: 'dist/rollup_bundle.js',
    format: 'iife', //Type of output (amd, cjs, es, iife, umd)
  }]
}
