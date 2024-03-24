describe('Check slider description', function (){
    it('Checks if all slides have right title and description', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-slide-active').should('contain', 'Italy');
        cy.get('.swiper-slide-active').should('contain', 'Rome');
        cy.wait(2000);
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
        cy.get('.swiper-slide-active').should('contain', 'London');
        cy.wait(2000);
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-active').should('contain', 'France');
        cy.get('.swiper-slide-active').should('contain', 'Paris');
      });
  })
