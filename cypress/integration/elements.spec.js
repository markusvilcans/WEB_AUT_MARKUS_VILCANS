import AutomationPage from "../pageObjects/AutomationPage";





context("Automation scenarios for homework", () => {
    beforeEach(() => {
        AutomationPage.visit();
        
    });

    it("Fill the form", () => {
    cy.fixture("AutomationData").then((data) => {
        //Filling in the information


        AutomationPage.firstName.type(data.vards);
        AutomationPage.lastname.type(data.uzvards);
        AutomationPage.userEmail.type(data.epasts);
        AutomationPage.gender.click({force: true});
        AutomationPage.number.type(data.nummurs);
        AutomationPage.date.click();
        AutomationPage.dateMonth.select(1);
        AutomationPage.dateYear.select(30);
        AutomationPage.dateDay.eq(4).contains(28).click();
        AutomationPage.subject.click().type('Ec{enter}');
        AutomationPage.hobbies.click({force:true});
        AutomationPage.upload.selectFile('cypress/files/nani.jpeg');
        AutomationPage.addressInput.click().type(data.adrese);
        AutomationPage.state.click({force:true}).type('NC{enter}');
        AutomationPage.city.click({force:true}).type('De{enter}');
        AutomationPage.submit.click({force:true});
        //Man testējot reizēm neuzspieda submit pogu, jo tur mēdza pa virsu izlekt reklāma
        //tāpēc arī uzliku force:true tajā vietā, pēc idejas viņu nevajag. :)



        //Validating info
        AutomationPage.table.find('tr').eq(1).should('contain',data.vards).should('contain',data.uzvards);
        AutomationPage.table.find('tr').eq(2).should('contain',data.epasts);
        AutomationPage.table.find('tr').eq(3).should('contain','Male');
        AutomationPage.table.find('tr').eq(4).should('contain',data.nummurs);
        AutomationPage.table.find('tr').eq(5).should('contain','28 February,1930');
        AutomationPage.table.find('tr').eq(6).should('contain','Economics');
        AutomationPage.table.find('tr').eq(7).should('contain','Music');
        AutomationPage.table.find('tr').eq(8).should('contain','nani.jpeg');
        AutomationPage.table.find('tr').eq(9).should('contain',data.adrese);
        AutomationPage.table.find('tr').eq(10).should('contain','NCR Delhi'); 
        })       
    });
});