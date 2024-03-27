// __tests__/Button.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import Button from '../src/Button';

expect.extend({ toBeInTheDocument });

test('renders button with correct text', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
