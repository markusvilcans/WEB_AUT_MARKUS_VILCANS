import BasePage from "./BasePage";

class AutomationPage extends BasePage {
    static get url() {
        return "https://demoqa.com/automation-practice-form";
    }

    static get firstName(){
        return cy.get("#firstName");
    }

    static get lastname(){
        return cy.get("#lastName");
    }

    static get userEmail(){
        return cy.get("#userEmail");
    }

    static get gender(){
        return cy.get("#gender-radio-1");
    }

    static get date(){
        return cy.get("#dateOfBirthInput");
    }

    static get dateMonth(){
        return cy.get(".react-datepicker__month-select");
    }

    static get dateYear(){
        return cy.get(".react-datepicker__year-select");
    }

    static get dateDay(){
        return cy.get(".react-datepicker__week");
    }

    static get subject(){
        return cy.get("#subjectsContainer");
    }

    static get hobbies(){
        return cy.get("#hobbies-checkbox-3");
    }

    static get upload(){
        return cy.get("#uploadPicture");
    }

    static get addressInput(){
        return cy.get("#currentAddress-wrapper");
    }

    static get state(){
        return cy.get("#react-select-3-input");
    }

    
    static get city(){
        return cy.get("#react-select-4-input");
    }

    static get submit(){
        return cy.get("button#submit");
    }

    static get number(){
        return cy.get("#userNumber");
    }

    static get table(){
        return cy.get("table");
    }
}

export default AutomationPage;