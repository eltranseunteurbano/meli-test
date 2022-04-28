import { expect, test } from 'vitest';
import ThousandSeparator from '../src/utils/thousandSeparator';

test('Thousand Separator', () => {
  expect(ThousandSeparator(1000)).toEqual('1.000');
  expect(ThousandSeparator(100)).toEqual('100');
  expect(ThousandSeparator(2000, ',')).toEqual('2,000');
  expect(ThousandSeparator(200, ',')).toEqual('200');
});
