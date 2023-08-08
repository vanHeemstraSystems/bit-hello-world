import { render } from '@testing-library/react';
import { BasicHelloWorld } from './hello-world.composition';

it('renders a greeting', () => {
  const { getByText } = render(<BasicHelloWorld />);
  const rendered = getByText('Hello world!');
  expect(rendered).toBeTruthy();
});
