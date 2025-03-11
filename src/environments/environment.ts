import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Wajba',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://wajbaapi-08765bdfe115.herokuapp.com',
    redirectUri: baseUrl,
    clientId: 'Wajba_App',
    responseType: 'code',
    scope: 'offline_access Wajba',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://wajbaapi-08765bdfe115.herokuapp.com',
      rootNamespace: 'Wajba',
    },
  },
} as Environment;
