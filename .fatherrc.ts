export default {
  cjs: 'babel',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  umd: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
  ],
};
