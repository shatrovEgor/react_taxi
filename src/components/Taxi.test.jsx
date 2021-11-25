import React from 'react';
import { render, screen} from '@testing-library/react';
import Taxi from './Taxi';
import '@testing-library/jest-dom'
 
describe("<Taxi/>", () => {
    it("рендер кнопки", () => {
        render(<Taxi/>);
        expect(screen.getByText(/заказать/i)).toBeInTheDocument();
        screen.getByRole('button')
    })
})