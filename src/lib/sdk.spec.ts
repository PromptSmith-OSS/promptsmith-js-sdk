import {expect, test} from '@jest/globals';

import PromptSmith from './sdk';


test('init API client', () => {
  const client = new PromptSmith('http://localhost:3000', 'api_key', 60);
  expect(client).toBeDefined();
})
