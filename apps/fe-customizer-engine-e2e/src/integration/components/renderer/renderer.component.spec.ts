describe('fe-customizer-engine', () => {
  beforeEach(() => cy.visit('/iframe.html?id=renderercomponent--primary&args=complete;config;'));
  it('should render the component', () => {
    cy.get('fec-renderer').should('exist');
  });
});