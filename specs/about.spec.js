// Imports page objects from other files
let NotesPage = require('./../pageObjects/NotesPage.js').NotesPage
let AboutPage = require('./../pageObjects/AboutPage.js').AboutPage

describe('About page tests:', function () {
    let notesPage = new NotesPage()
    let aboutPage = new AboutPage()

    it('should validate Back, Github, Twitter social icons on About page', function () {

        notesPage.goTo(notesPage.optionAbout, aboutPage.iconTwitter)

        expect(aboutPage.iconArrowLeft.isDisplayed()).toBe(true,
            'Icon Back (Arrow Left) should be displayed')
        expect(aboutPage.iconGithub.isDisplayed()).toBe(true,
            'Icon Github should be displayed')
        expect(aboutPage.iconTwitter.isDisplayed()).toBe(true,
            'Icon Twitter should be displayed')
    })

})
