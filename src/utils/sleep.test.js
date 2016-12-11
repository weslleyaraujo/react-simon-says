import sleep from './sleep';

it('sleeps over a timeout', () => {
  const bar = jest.fn();
  sleep(100).then(bar).then(x => expect(bar).toHaveBeenCalled());
});
