export class loginPage{

    webLocators={
        myAccount:"a[title='My Account'] span[class='hidden-xs hidden-sm hidden-md']",
        loginButton:"li[class='dropdown open'] li:nth-child(2) a:nth-child(1)",
        email:"#input-email",
        password:"#input-password",
        loginSubmitButton:"input[value='Login']"
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    clickOnMyAccount(){
        cy.get(this.webLocators.myAccount).click()
    }

    clickOnLoginButton(){
        cy.get(this.webLocators.loginButton).click()
    }

    enterEmail(userEmail){
        cy.get(this.webLocators.email).type(userEmail)
    }

    enterPassword(userPassword){
        cy.get(this.webLocators.password).type(userPassword)
    }

    clickOnLoginSubmitButton(){
        cy.get(this.webLocators.loginSubmitButton).click()
    }
}