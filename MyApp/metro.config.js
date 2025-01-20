const {getDefaultConfig} = require('@react-native/metro-config');

//to use the src folder
module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  return {
    ...config,
    projectRoot: __dirname,
    watchFolders: [__dirname + '/src'],
  };
})();
