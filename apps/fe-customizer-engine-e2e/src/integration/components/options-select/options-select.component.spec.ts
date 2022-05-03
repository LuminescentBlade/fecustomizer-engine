describe('fe-customizer-engine', () => {
  beforeEach(() => cy.visit('/iframe.html?id=optionsselectcomponent--primary&args=disabled:false;value;min;max;enableMenu:false;'));
  it('should render the component', () => {
    cy.get('fec-options-select').should('exist');
  });
});