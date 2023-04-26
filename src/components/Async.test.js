import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {
    test('Renders post if requests succedd', async () => {

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });

        //Arrange
        render(<Async />);

        //Act

        //Assert
        // const listItemElement = screen.getAllByRole('listitem' );
        //Does not work as check the moment the page loads at which time its empty and returns false
        // and then it fetches and fills in the state
        //so we need a promise rather than query immediately 


        const listItemElement = await screen.findAllByRole('listitem', { exact: false }, {})
        expect(listItemElement).not.toHaveLength(0);

    });

});