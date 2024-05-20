describe('XPathLocators',() =>{

    it('finds list items', () => {
        cy.visit(" https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform")
        cy.get("//input[@class='whsOnd zHQkBf']").type("Ankita Pawar")
        cy.get("//div[@id=i12]").click()
        cy.get("//div[@class='MocG8c HZ3kWc mhLiyf LMgvRb KKjvXb DEh1R']").click()
        cy.ge("//div[@class='MocG8c HZ3kWc mhLiyf OIC90c LMgvRb']").contains('yes').click()
        cy.get("//span[@class='NPEfkd RveJvd snByac']").contains('Submit').click()
        cy.wait(3000)
        cy.get("Your response has been recorded").should('be.visible');
        
        


        
      });




})
