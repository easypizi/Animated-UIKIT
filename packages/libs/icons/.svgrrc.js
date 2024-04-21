const path = require('path');

const indexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath.path, path.extname(filePath.path));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName}Icon } from './${basename}'`;
  });
  return exportEntries.join('\n');
};

const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
 
${variables.exports};
`;
};

module.exports = {
  icon: true,
  dimensions: true,
  template,
  indexTemplate,
  replaceAttrValues: {
    '#6F7381': 'currentColor',
  },
  svgoConfig: {
    plugins: [
      'removeXMLNS',
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'prefixIds',
        params: {
          prefix: (_, { path: filePath }) => path.basename(filePath, '.svg'),
        },
      },
    ],
  },
};
