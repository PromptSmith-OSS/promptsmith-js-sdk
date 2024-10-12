import {expect, test} from '@jest/globals';

import ApiClient from './sdk';


test('init API client', () => {
  const client = new ApiClient('http://localhost:3000', 'api_key', 60);
  expect(client).toBeDefined();
})
