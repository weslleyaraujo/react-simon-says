import createAction from './create-action';

it('creates an action creator', () => {
  const type = 'FOO_BAR';
  const payload = { foo: 'BAR' };

  const actionCreator = createAction(type);
  expect(typeof actionCreator === 'function').toBe(true);
  const action = actionCreator(payload);
  expect(action.type).toEqual(type);
  expect(action.payload).toEqual(payload);
});
