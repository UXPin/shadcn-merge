module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/Badge/Badge.jsx',
          'src/components/Card/Card.jsx',
          'src/components/CardContent/CardContent.jsx',
          'src/components/CardDescription/CardDescription.jsx',
          'src/components/CardFooter/CardFooter.jsx',
          'src/components/CardHeader/CardHeader.jsx',
          'src/components/CardTitle/CardTitle.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  settings: { useUXPinProps: true, useConvertingToUXPinClassic: true },
  name: 'ShadCN Design System',
};
