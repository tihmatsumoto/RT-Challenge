import { test, expect } from '@playwright/test';

import { data } from '../../data/get-people-test-data.json'

test('Should have correct response body for R2-D2', async ({ request }) => {

  const response = await request.get(data.getAPIendpoint);
  
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  const r2d2 = responseBody.results.find((character: any) => character.name === data.character);
  
  expect(r2d2).toBeDefined();

  expect(r2d2.skin_color).toBe(data.skinColor);
});