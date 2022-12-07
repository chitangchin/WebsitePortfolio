describe('Nav Menu', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    describe('nav', () => {

        // Testing endpoints/routes
        
        it('Should Rout to home Page by default', () => {
            cy.location('pathname').should('include', '')
        })

        it('Should Route to home Page', () => {
            cy.get('[data-cy="home"]').click();
            cy.location('pathname').should('include', '')
        })

        it('Should Route to schedule a call meeting', () => {
            cy.get('[data-cy="calendar"]').should('have.attr', 'href','https://calendly.com/chitangchin/meeting')
        })

        it('Should Route to Guestbook and go back and forward in browser history', () => {
            cy.get('[data-cy="guestbook"]').click();

            cy.location('pathname').should('include', 'GuestBook')

            cy.go('back')
            cy.location('pathname').should('not.include', 'GuestBook')

            cy.go('forward')
            cy.location('pathname').should('include', 'GuestBook')

            // clicking back
            cy.go(-1)
            cy.location('pathname').should('not.include', 'GuestBook')

            // clicking forward
            cy.go(1)
            cy.location('pathname').should('include', 'GuestBook')
        })

        it('Should Route to sandbox and go back and forward in browser history', () => {
            cy.get('[data-cy="about"]').click();

            cy.location('pathname').should('include', 'About')

            cy.go('back')
            cy.location('pathname').should('not.include', 'About')

            cy.go('forward')
            cy.location('pathname').should('include', 'About')

            // clicking back
            cy.go(-1)
            cy.location('pathname').should('not.include', 'About')

            // clicking forward
            cy.go(1)
            cy.location('pathname').should('include', 'About')
        })

        it('Should Route to 404 error and go back and forward in browser history', () => {
            cy.visit('http://localhost:3000/test', {failOnStatusCode: false}).contains("WHAT ARE YOU DOING?? THAT PAGE DOESNT EXIST???")
        })



        // Testing Dark and Light mode
        it('Website should be light when system is default light mode', () => {

        })

        it('Website should be dark when system is default dark mode', () => {

        })

        it('Should make the website go light when sun icon is clicked if system is default dark mode', () => {

        })


        it('Should make the website go dark when moon icon is clicked if system is default light mode', () => {

        })

    })
})