module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      }, 
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          shouldExtractLiteralValuesFromEnum: true, // 把枚举转换成字符串
          propFilter: (prop) => { // 过滤表格中展示的props属性，只展示自己定义的props
            if (prop.parent) {
              // console.log('prop.parent.fileName: ', prop.parent.fileName);
              // vikingShipComp/node_modules/@types/react/index.d.ts
              // vikingShipComp/src/components/Input/input.tsx
              return !prop.parent.fileName.includes('node_modules')
            }
            return true            
          }
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
