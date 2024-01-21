import { loginPage } from "../../pages/loginPage";
const loginPageObj = new loginPage()
import loginData from '../../fixtures/loginData.json'


describe(' test automation', () => {



    it('login flow', () => {
        loginPageObj.openURL()
        loginPageObj.enterEmail(loginData.email)
        loginPageObj.enterPassword(loginData.password)
        loginPageObj.clickOnLoginSubmitButton()

    })

})