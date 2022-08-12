import Config from 'react-native-config';

const {API_URL_DEV, API_URL_PROD} = Config;

const API = {
  currentEnv: 'dev',
  baseUrls: {
    dev: API_URL_DEV,
    prod: API_URL_PROD,
  },
};

export {API};
