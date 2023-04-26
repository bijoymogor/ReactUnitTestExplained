import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('Renders Hello World', () => {
        // Arrange
        render(<Greeting />);

        // Act

        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        //three types of function find, query, and get
		// get function will throw an error if an element is not found
		// query function will not throw an error if an element is not found
		// find function will return a promiseFFFF

        expect(helloWorldElement).toBeInTheDocument();
    });

    test(`Renders it's good to see you if button not clicked!`, () => {
        render(<Greeting />);
        const greetingElement = screen.getByText(`good to see you!`, {exact: false});
        expect(greetingElement).toBeInTheDocument();
    });
    
    test(`Renders changed if button was clicked`, ()=> {
        //Arrange
        render(<Greeting />);

        //Act
        const button = screen.getByText(`Change Text!`);
        userEvent.click(button);

        //Assert
        const outputElement = screen.getByText('Changed!', {exact: false});
        expect(outputElement).toBeInTheDocument();
    });

    test(`Renders it's good to see you on condition`, () => {
        render(<Greeting />);

        //Act
        const button = screen.getByText(`Change Text!`);
        userEvent.click(button);

        //Assert

        // Not work since it will throw an error
        // const outputElement = screen.getByText('good to see you', { exact: false });
        // expect(outputElement).not.toBeInTheDocument();

        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    })

});

