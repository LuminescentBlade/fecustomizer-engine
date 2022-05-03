describe('fe-customizer-engine', () => {
  beforeEach(() => cy.visit('/iframe.html?id=colorselectcomponent--primary&args=colorSettings;renderItem;canvasSize;value;baseTitle;'));
  it('should render the component', () => {
    cy.get('fec-color-select').should('exist');
  });
});