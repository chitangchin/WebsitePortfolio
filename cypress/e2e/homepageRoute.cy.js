describe('Home Experience and Project Routes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    describe('routes', () => {
        it('Should Route to lighthouse page and go back and forward in browser history', () => {
            cy.get('[data-cy="lighthouse"]').click();

            cy.location('pathname').should('include', 'Lighthouse')

            cy.go('back')
            cy.location('pathname').should('not.include', 'Lighthouse')

            cy.go('forward')
            cy.location('pathname').should('include', 'Lighthouse')

            // clicking back
            cy.go(-1)
            cy.location('pathname').should('not.include', 'Lighthouse')

            // clicking forward
            cy.go(1)
            cy.location('pathname').should('include', 'Lighthouse')
        })


        it('Should Route to JPI page and go back and forward in browser history', () => {
            cy.get('[data-cy="jpi"]').click();

            cy.location('pathname').should('include', 'JPI')

            cy.go('back')
            cy.location('pathname').should('not.include', 'JPI')

            cy.go('forward')
            cy.location('pathname').should('include', 'JPI')

            // clicking back
            cy.go(-1)
            cy.location('pathname').should('not.include', 'JPI')

            // clicking forward
            cy.go(1)
            cy.location('pathname').should('include', 'JPI')
        })


        it('Should Route to VOA page and go back and forward in browser history', () => {
            cy.get('[data-cy="voa"]').click();

            cy.location('pathname').should('include', 'VOA')

            cy.go('back')
            cy.location('pathname').should('not.include', 'VOA')

            cy.go('forward')
            cy.location('pathname').should('include', 'VOA')

            // clicking back
            cy.go(-1)
            cy.location('pathname').should('not.include', 'VOA')

            // clicking forward
            cy.go(1)
            cy.location('pathname').should('include', 'VOA')
        })


        it('Should Route to HomeGrub page and go back and forward in browser history', () => {
            cy.get('[data-cy="homegrub"]').click();

            cy.location('pathname').should('include', 'HomeGrub')

            cy.go('back')
            cy.location('pathname').should('not.include', 'HomeGrub')

            cy.go('forward')
            cy.location('pathname').should('include', 'HomeGrub')

            // clicking back
            cy.go(-1)
            cy.location('pathname').should('not.include', 'HomeGrub')

            // clicking forward
            cy.go(1)
            cy.location('pathname').should('include', 'HomeGrub')
        })

        
        it('Should Route to Green Planet page and go back and forward in browser history', () => {
            cy.get('[data-cy="greenplanet"]').click();

            cy.location('pathname').should('include', 'GreenPlanet')

            cy.go('back')
            cy.location('pathname').should('not.include', 'GreenPlanet')

            cy.go('forward')
            cy.location('pathname').should('include', 'GreenPlanet')

            // clicking back
            cy.go(-1)
            cy.location('pathname').should('not.include', 'GreenPlanet')

            // clicking forward
            cy.go(1)
            cy.location('pathname').should('include', 'GreenPlanet')
        })

    })
})