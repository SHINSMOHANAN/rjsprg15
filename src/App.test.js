import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("displays OFF initially", () => {
  render(<App />);

  expect(screen.getByText(/Status:/i)).toHaveTextContent("OFF");
});

test("changes OFF to ON when Toggle is clicked", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /toggle/i });

  fireEvent.click(button);

  expect(screen.getByText(/Status:/i)).toHaveTextContent("ON");
});

test("changes ON back to OFF when Toggle is clicked again", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /toggle/i });

  fireEvent.click(button);
  fireEvent.click(button);

  expect(screen.getByText(/Status:/i)).toHaveTextContent("OFF");
});

test("Toggle button exists", () => {
  render(<App />);

  expect(
    screen.getByRole("button", { name: /toggle/i })
  ).toBeInTheDocument();
});
