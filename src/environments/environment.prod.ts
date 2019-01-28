import { BaseballAPIConfiguration } from '@adp/baseball';

export const environment = {
  production: true
};

export const BASEBALL_API_CONFIGURATION: BaseballAPIConfiguration = {
  baseUrl: 'https://www.thesportsdb.com/api/v1/json',
  apiKey: '1',
  alertDelay: 0
};
