import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StockSizeCalculatorApp from '../components/StockSizeCalculatorApp';

xtest('renders', () => {
  render(<StockSizeCalculatorApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
