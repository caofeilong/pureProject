import commonjs from 'rollup-plugin-commonjs' 
import VuePlugin from 'rollup-plugin-vue'

export default {
    input: './rollupvue/index.js',
    output: {
      file: './rollupvue/bundle.js',
      format: 'cjs'
    },
    plugins: [
<<<<<<< HEAD
      commonjs({
        extensions: [ '.js', '.vue' ],  
      }),
=======
      commonjs(),
>>>>>>> cb68ba897ec262857657c1dc0a47393a08a28eb0
      VuePlugin(/* VuePluginOptions */)
    ]
  };