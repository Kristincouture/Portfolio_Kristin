import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KGZ logo and gallery section', () => {
  render(<App />);
  expect(screen.getByAltText(/KGZ/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /gallery/i })).toBeInTheDocument();
});
