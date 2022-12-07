describe('Home Experience and Project Routes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    describe('routes', () => {
        it('Should Route to lighthouse page and go back and forward in browser history', () => {
            cy.get('[data-cy="lighthouse"]').click();

            cy.location('pathname').should('include', 'Calendar')

            cy.go('back')
            cy.location('pathname').should('not.include', 'Calendar')

            cy.go('forward')
            cy.location('pathname').should('include', 'Calendar')

            // clicking back
            cy.go(-1)
            cy.location('pathname').should('not.include', 'Calendar')

            // clicking forward
            cy.go(1)
            cy.location('pathname').should('include', 'Calendar')
        })

    })
})