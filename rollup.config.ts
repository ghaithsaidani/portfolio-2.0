import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  plugins: [
    terser({
// remove all comments
      format: {
        comments: false
      },
// prevent any compression
      compress: false
    }),
  ],
};