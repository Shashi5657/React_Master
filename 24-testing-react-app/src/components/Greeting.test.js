import { render, screen, document } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
import { fireEvent } from "@testing-library/react";

describe("greeting component", () => {
  //   test("renders Good Morning as text", () => {
  //     render(<Greeting />);

  //     const goodMorningElement = screen.getByText("Good Morning!", {
  //       exact: false,
  //     });
  //     expect(goodMorningElement).toBeInTheDocument();
  //   });

  //   test('renders how are you if the button was not clicked', ()=> {
  //     render(<Greeting />)

  //     const outputElement = screen.getByText('how are you', {exact : false})
  //     expect(outputElement).toBeInTheDocument()
  //   })

  test('renders "you are good" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("changed");
    expect(outputElement).toBeInTheDocument();
  });

  //   test('doesnot render how are you if the button was clicked', ()=> {
  //     render(<Greeting />)

  //     const buttonElemet = screen.getByRole('button')
  //     userEvent.click(buttonElemet)

  //     const outputElement = screen.queryByText('how are you', {exact : false})
  //     expect(outputElement).toBeNull();
  //   })
});
