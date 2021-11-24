import React from "react";
import Car from "./Car"
import {render} from '@testing-library/react'

describe("Car", () => {
    it("renders correctly", () => {
        const {container} = render(<Car/>)
        expect(container.innerHTML).toMatch("Стандарт")
        expect(container.innerHTML).toMatch("Бизнес")
        expect(container.innerHTML).toMatch("Премиум")
    })
})