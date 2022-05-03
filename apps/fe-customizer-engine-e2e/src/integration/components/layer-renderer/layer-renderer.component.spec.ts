describe('fe-customizer-engine', () => {
  beforeEach(() => cy.visit('/iframe.html?id=layerrenderercomponent--primary&args=data;index;colorValue;dependsOnIndex;layerSize;'));
  it('should render the component', () => {
    cy.get('fec-layer-renderer').should('exist');
  });
});