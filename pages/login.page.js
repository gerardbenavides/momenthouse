class LoginPage {
    get heading () { return '//h1[.="Moment House"]'}
    get btnSignIn () { return '//nav//a[@class="Button_button__18ZJ2 Desktop_button__1fa12 Button_default__33JGL"]'}
    get inputEmail () { return '//input[@type="email"]'}
    get inputPassword () { return  '//input[@type="password"]' }
    get btnSubmit () { return '//div[@class="Container_card__paYxa"]//button[@type="submit"]'}
}
module.exports = new LoginPage()
