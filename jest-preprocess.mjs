import { createTransformer } from 'babel-jest';
const babelOptions = {
  presets: [
    [
      'babel-preset-gatsby',
      {
        reactRuntime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
};
export default createTransformer(babelOptions);
