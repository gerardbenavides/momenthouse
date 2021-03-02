class DashboardPage {

    get headingMyTickets () { return '//h1[.="My Tickets"]'}
    get navAccount () { return '//li//a[.="Account"]'}
    get navAccountSignout () { return '//li//a[.="Sign out"]'}
}
module.exports = new DashboardPage()
