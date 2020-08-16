import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// TODO: to add more tests when main functionality is completed
test('renders jobs list link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Jobs List/i);
  expect(linkElement).toBeInTheDocument();
});
