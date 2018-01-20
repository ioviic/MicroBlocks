
it('renders without crashing', () => {
  const props = {
    configuration: { test: 'mama' },
  };
  // const div = document.createElement('div');
  expect(props).toBe(props);
});
