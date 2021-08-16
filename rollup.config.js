import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";
import { optimizeImports } from "carbon-preprocess-svelte";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const PORT = process.env.PORT || 3000;
const production = !process.env.ROLLUP_WATCH;


export default {
  input: "src/index.js",
  output: {
    sourcemap: !production,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      dev: !production,
      preprocess: [optimizeImports()],
      compilerOptions: { dev: !production },
    }),
    resolve({ browser: true, dedupe: ["svelte"] }),
    commonjs(),
    css({ output: "bundle.css" }),
    !production && serve({ contentBase: ["public"], port: PORT }),
    !production && livereload("public"),
    production && terser(),
  ],
};
