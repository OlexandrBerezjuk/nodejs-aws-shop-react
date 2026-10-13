import { afterEach, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "~/components/MainLayout/components/ThemeToggle";
import { renderWithProviders } from "~/testUtils";

afterEach(() => {
  localStorage.clear();
});

test("Toggles between light and dark mode", async () => {
  renderWithProviders(<ThemeToggle />);
  const html = document.documentElement;
  const button = await screen.findByRole("button", {
    name: "toggle dark mode",
  });

  await userEvent.click(button);
  expect(html).toHaveClass("dark");

  await userEvent.click(button);
  expect(html).toHaveClass("light");
  expect(html).not.toHaveClass("dark");
});
