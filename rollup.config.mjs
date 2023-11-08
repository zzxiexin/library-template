import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import typeScriptPlugin2 from 'rollup-plugin-typescript2'

const file = (type) => `dist/index.${type}.js`
export default {
  input: 'lib/index.ts',
  output: [
    {
      file: file('umd'),
      format: 'umd',
      /** 如果是react ui库,去除react打包 */
      globals: {
        react: 'React',
      },
      // umd全局变量名称
      name: 'umdName',
    },
    {
      file: file('esm'),
      format: 'es',
      sourcemap: 'inline',
      globals: {
        react: 'React',
      },
    },
    {
      file: file('cjs'),
      format: 'cjs',
      sourcemap: 'inline',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typeScriptPlugin2({
      verbosity: 2,
      clean: true,
      useTsconfigDeclarationDir: true,
    }), // 解析TypeScript
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'], // 添加对 .ts 文件的处理
      presets: [['@babel/preset-env', { targets: 'defaults' }]],
    }),
  ],
}
