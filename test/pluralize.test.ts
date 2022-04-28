import { expect, test } from 'vitest';
import Pluralize from '../src/utils/pluralize';

test('Pluralize', () => {
  expect(Pluralize(-1)).toEqual('');
  expect(Pluralize(0)).toEqual('');
  expect(Pluralize(1)).toEqual('');
  expect(Pluralize(2)).toEqual('s');

  expect(`test${Pluralize(-1)}`).toEqual('test');
  expect(`test${Pluralize(0)}`).toEqual('test');
  expect(`test${Pluralize(1)}`).toEqual('test');
  expect(`test${Pluralize(2)}`).toEqual('tests');

  expect(`pan${Pluralize(-1, 'es')}`).toEqual('pan');
  expect(`pan${Pluralize(0, 'es')}`).toEqual('pan');
  expect(`pan${Pluralize(1, 'es')}`).toEqual('pan');
  expect(`pan${Pluralize(2, 'es')}`).toEqual('panes');
});
