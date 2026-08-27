import { add, divide, multiply, subtract } from "./calculator";

const root = document.getElementById("app");
if (root) {
  const lines = [
    `add(2, 3) = ${add(2, 3)}`,
    `subtract(10, 4) = ${subtract(10, 4)}`,
    `multiply(6, 7) = ${multiply(6, 7)}`,
    `divide(10, 2) = ${divide(10, 2)}`,
  ];
  const ul = document.createElement("ul");
  for (const line of lines) {
    const li = document.createElement("li");
    li.textContent = line;
    ul.appendChild(li);
  }
  root.appendChild(ul);
}
