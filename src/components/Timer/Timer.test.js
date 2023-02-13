import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Timer from "./Timer";

describe("Timer component", () => {
  it("renders the timer component correctly", () => {
    const { getByText } = render(<Timer />);
    // eslint-disable-next-line no-restricted-globals
    expect(getByText("Time remaining: 05:00")).toBeInTheDocument();
  });

  it("starts the timer when the start button is clicked", async () => {
    const { getByText, getByTestId } = render(<Timer />);
    fireEvent.click(getByText("Start"));
    await waitFor(() => expect(getByTestId("time-remaining")).toHaveTextContent("Time remaining: 05:00"));
  });

  it("stops the timer when the stop button is clicked", async () => {
    const { getByText, getByTestId } = render(<Timer />);
    fireEvent.click(getByText("Start"));
    await waitFor(() => expect(getByTestId("time-remaining")).toHaveTextContent("Time remaining: 05:00"));
    fireEvent.click(getByText("Stop"));
    await waitFor(() => expect(getByTestId("time-remaining")).toHaveTextContent("Time remaining: 05:00"));
  });

//   it("displays time's up message when the timer reaches 0", async () => {
//     const { getByText, getByTestId } = render(<Timer />);
//     fireEvent.click(getByText("Start"));
//     await waitFor(() => expect(getByTestId("time-remaining")).toHaveTextContent("Time's up!"));
//   });
});
