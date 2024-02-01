import { loginPage } from "./pages/loginPage";
const loginPageObj = new loginPage()
import loginData from '../fixtures/loginData.json'


describe('All test bundle', () => {

    it('login flow test 1', () => {
        loginPageObj.openURL()
        loginPageObj.enterEmail(loginData.email)
        loginPageObj.enterPassword(loginData.password)
        loginPageObj.clickOnLoginSubmitButton()
        loginPageObj.loginSuccess()
    })

    it('login flow test 2', () => {
        loginPageObj.openURL()
        loginPageObj.enterEmail(loginData.email)
        loginPageObj.enterPassword(loginData.password2)
        loginPageObj.clickOnLoginSubmitButton()
        loginPageObj.loginSuccess()

    })
})