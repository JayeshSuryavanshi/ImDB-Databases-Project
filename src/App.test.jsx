import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the query prompt and input', () => {
  render(<App />);
  expect(screen.getByText(/enter the query!/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /enter the query/i })).toBeInTheDocument();
});
