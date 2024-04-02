// __tests__/Counter.test.js
// Jest will automatically look for test files with any of the following popular naming conventions:
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import Counter from '../src/Counter';

expect.extend({ toBeInTheDocument });

test('renders counter with initial count 0', () => {
  render(<Counter />);
  const countElement = screen.getByText(/count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments count when increment button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  const countElement = screen.getByText(/count: 1/i);
  expect(countElement).toBeInTheDocument();
});

test('decrements count when decrement button is clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/decrement/i);
  fireEvent.click(decrementButton);
  const countElement = screen.getByText(/count: -1/i);
  expect(countElement).toBeInTheDocument();
});
