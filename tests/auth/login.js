const LoginPage = require('../../pages/login.page')
const DashboardPage = require('../../pages/dashboard.page')
const credentials = require('../../data/credentials');

Feature('login');

Scenario('Logs in user', ({ I }) => {
    I.amOnPage('/')
    I.seeElement(LoginPage.heading)
    I.click(LoginPage.btnSignIn)
    I.see('Sign in')
    I.fillField(LoginPage.inputEmail, credentials.email)
    I.fillField(LoginPage.inputPassword, credentials.password)
    I.click(LoginPage.btnSubmit)
    I.see('My Tickets')
})

Scenario('Logs out user', ({ I }) => {
    I.seeElement(DashboardPage.headingMyTickets)
    I.click(DashboardPage.navAccount)
    I.click(DashboardPage.navAccountSignout)
    I.seeElement(LoginPage.btnSignIn)
});
