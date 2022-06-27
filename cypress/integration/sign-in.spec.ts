describe('sign in', () => {
  it('should show the success screen after correct authorization', () => {
    cy.visit('http://localhost:3000')
    cy.window()
      .its('accountsSDK')
      .then((accountsSDK) => {
        cy.stub(accountsSDK, 'popup')
          .as('popupAuthorization')
          .returns({
            authorize() {
              return Promise.resolve({
                access_token: 'token',
                expires_in: 216000,
                organization_id: 'org-id',
                scope: 'agents--all:ro',
              })
            },
          })
      })

    cy.contains('Sign in with LiveChat').click()
    cy.get('@popupAuthorization').should('be.calledOnce')

    cy.contains('Logged in succesfully!').should('be.visible')
  })
})
