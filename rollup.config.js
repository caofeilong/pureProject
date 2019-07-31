import commonjs from 'rollup-plugin-commonjs' 
import VuePlugin from 'rollup-plugin-vue'

export default {
    input: './rollupvue/index.js',
    output: {
      file: './rollupvue/bundle.js',
      format: 'cjs'
    },
    plugins: [
      commonjs({
        extensions: [ '.js', '.vue' ],  
      }),
      VuePlugin(/* VuePluginOptions */)
    ]
  };