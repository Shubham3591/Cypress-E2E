import { loginPage } from "./pages/loginPage";
const loginPageObj = new loginPage()
import loginData from '../fixtures/loginData.json'


describe('All test bundle', () => {


    it('test 1- login with valid creadentials', () => {
        loginPageObj.openURL()
        loginPageObj.enterEmail(loginData.email)
        loginPageObj.enterPassword(loginData.password)
        loginPageObj.clickOnLoginSubmitButton()
        loginPageObj.loginSuccess()
    })

    it('test 2 - login with invalid creadentials', () => {
        loginPageObj.openURL()
        loginPageObj.enterEmail(loginData.email)
        loginPageObj.enterPassword(loginData.password2)
        loginPageObj.clickOnLoginSubmitButton()
        loginPageObj.loginSuccess()

    })
})

it('test 3 - outside describe login with invalid credentials', () => {
    loginPageObj.openURL()
    loginPageObj.enterEmail(loginData.email)
    loginPageObj.enterPassword(loginData.password2)
    loginPageObj.clickOnLoginSubmitButton()
    loginPageObj.loginSuccess()

})