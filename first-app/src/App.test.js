import { fireEvent, render, screen } from "@testing-library/react";
import ArrayState from "./componant/object_state/ArrayState";

test("increments only the selected color count", () => {
  render(<ArrayState />);

  fireEvent.click(screen.getAllByRole("button", { name: "+1" })[0]);

  expect(screen.getByText("blue==1")).toBeInTheDocument();
  expect(screen.getByText("red==0")).toBeInTheDocument();
});
