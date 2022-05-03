describe('fe-customizer-engine', () => {
  beforeEach(() => cy.visit('/iframe.html?id=coloroptionspalettecomponent--primary&args=disabled:false;colors;index;title;'));
  it('should render the component', () => {
    cy.get('fec-color-options-palette').should('exist');
  });
});