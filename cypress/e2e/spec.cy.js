describe('home page', () => {
  it('the h1 contains the correct text', () => {
    cy.visit('https://work.co/')
    cy.get('h1').contains("We solve complex problems through design & technology")
  })
})