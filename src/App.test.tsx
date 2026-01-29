import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hasini Asara name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Hasini Asara/i);
  expect(nameElement).toBeInTheDocument();
});
