import { describe, expect, it } from "vitest";
import { add, divide, max, min, modulo, multiply, percentage, subtract } from "./calculator";

describe("calculator", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it("multiplies two numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  it("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("throws when dividing by zero", () => {
    expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
  });

  it("returns the max value", () => {
    expect(max(1, 5, 9, 3)).toBe(9);
  });

  it("returns the min value", () => {
    expect(min(4, 2, 8, 1)).toBe(1);
  });

  it("returns the modulo remainder", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  it("throws when modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Cannot divide by zero");
  });

  it("computes a percentage", () => {
    expect(percentage(25, 200)).toBe(12.5);
  });

  it("throws when percentage total is zero", () => {
    expect(() => percentage(1, 0)).toThrow("Total cannot be zero");
  });
});
