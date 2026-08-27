export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export function max(...args: number[]): number {
  return Math.max(...args);
}

export function min(...args: number[]): number {
  return Math.min(...args);
}

export function modulo(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a % b;
}

export function percentage(value: number, total: number): number {
  if (total === 0) {
    throw new Error("Total cannot be zero");
  }
  return (value / total) * 100;
}
