// Imports page objects from other files
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let ArchivePage = require('./pageObjects/ArchivePage.js').ArchivePage
let AboutPage = require('./pageObjects/AboutPage.js').AboutPage

// Just our base URL
let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Preserver tests', function () {
    let notesPage = new NotesPage()
    let archivePage = new ArchivePage()
    let aboutPage = new AboutPage()

    beforeEach(function () {
        browser.get(URL)
        browser.sleep(browser.params.customTimeout)
    })

    //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
        // Wiping cookie files ONLY for current domain
        browser.manage().deleteAllCookies()
        // Wiping local and session storage
        browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
                .then(undefined,
            function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
            })
        // Wiping indexedDB
        browser.executeScript(`
        indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
        `).then(undefined,
            function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
        })
    })

    it('should be created when title and body provided', function () {

        notesPage.createNote('Test', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
    })

    it('should be created when only title provided', function () {

        notesPage.createNote('Test', '')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
    })

    it('should be created when only body provided', function () {

        notesPage.createNote('', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
    })

    it('should NOT be created when nothing provided', function () {

        notesPage.createNote('', '')
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
    })

    // TODO:
    // 1. Archive Notes, Recicle Bin, About - write page objects for this 3 pages
    // 2. Write tests for archive (unarchive, delete), delete note (delete forever, restore) - click on icons

    it('should be unarchived', function () {

        notesPage.createNote('Test', 'Test')

        notesPage.archiveNote()

        browser.sleep(browser.params.customMinTimeout)

        archivePage.unarchiveNote()

        browser.sleep(browser.params.customMinTimeout)

        expect(notesPage.getNotes().count()).toBe(1,
            'Archived notes count should be 1 after it was unarchived')
    })

    it('should be deleted', function () {

        notesPage.createNote('Test', 'Test')

        notesPage.archiveNote()

        browser.sleep(browser.params.customMinTimeout)

        archivePage.deleteNote()

        browser.sleep(browser.params.customMinTimeout)

        expect(notesPage.getNotes().count()).toBe(1,
            'Deleted notes count should be 1 after it was deleted')
    })

    it('should validate Back, Github, Twitter social icons on About page', function () {

        notesPage.goTo(notesPage.optionAbout)

        expect(aboutPage.iconArrowLeft.isDisplayed()).toBe(true,
            'Icon Back (Arrow Left) should be displayed')
        expect(aboutPage.iconGithub.isDisplayed()).toBe(true,
            'Icon Github should be displayed')
        expect(aboutPage.iconTwitter.isDisplayed()).toBe(true,
            'Icon Twitter should be displayed')
    })

})
