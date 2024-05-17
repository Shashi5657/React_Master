import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id : 'p1', title : 'first post'}],
    });
    render(<Async />);

    const listItemElemets = await screen.findAllByRole("listitem");
    expect(listItemElemets).not.toHaveLength(0);
  });
});
