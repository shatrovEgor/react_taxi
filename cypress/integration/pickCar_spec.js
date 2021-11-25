/* eslint-disable no-undef */

describe('carPick', () => {
    it('user can make pick car', () => {
        //login 
        cy.viewport(1200, 900)
        cy.visit('http://localhost:3000')
        cy.findByTestId('email-first').type("test@test.com")
        cy.findByTestId('password-first').type('123123')
        cy.findByRole('button', {  name: /go/i}).click()
        //click btn card and route to profile page
        cy.findByRole('button', {  name: /перейти в профиль/i}).click()
        //add new card
        cy.findByTestId('profile-name').type("Egor")
        cy.findByTestId('profile-cardId').type("4000500060007000")
        cy.findByTestId('profile-date').type("12/12")
        cy.findByTestId('profile-cvv').type("777")
        cy.findByRole('button', {  name: /сохранить/i}).click()
        //click btn and route to map page
        cy.findByRole('link', {  name: /перейти на карту/i}).click()
        //pick car
        cy.findByTestId('route-first').click()
        cy.findByRole('option', {  name: /пулково \(led\)/i}).click()
        cy.findByTestId('route-second').click()
        cy.findByRole('option', {  name: /кинотеатр аврора/i}).click()
        cy.findByRole('heading', {  name: /250 ₽/i}).click()
        cy.findByRole('button', {  name: /заказать/i}).click()
        //leave the app
        cy.findByRole('button', {  name: /выйти/i}).click()
    })
})