export class loginPage{

        myAccount = "a[title='My Account'] span[class='hidden-xs hidden-sm hidden-md']"
        loginButton = "li[class='dropdown open'] li:nth-child(2) a:nth-child(1)"
        email = "#input-email"
        password = "#input-password"
        loginSubmitButton = "input[value='Login']"
        loginSuccessBtn = "My Orders"

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    clickOnMyAccount(){
        cy.get(this.myAccount).click()
    }

    clickOnLoginButton(){
        cy.get(this.loginButton).click()
    }

    enterEmail(userEmail){
        cy.get(this.email).type(userEmail)
    }

    enterPassword(userPassword){
        cy.get(this.password).type(userPassword)
    }

    clickOnLoginSubmitButton(){
        cy.get(this.loginSubmitButton).click()
        cy.wait(2000)
    }

    loginSuccess(){
        cy.contains(this.loginSuccessBtn)
        
    }
}