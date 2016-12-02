let BasePage = require('./BasePage.js').BasePage
let EC = protractor.ExpectedConditions

class NotesPage extends BasePage {

    constructor() {
        super()
        this.newNoteBodyField = $('.note-editor textarea')
        this.newNoteTitleField = $('.note-editor input[placeholder="Title"]')
        this.iconArchive = $('[title="Archive"] > .fa-download')
        this.notificationSuccess = $('.notes-notifications.success')
    }

    // Creates note on the page
    createNote(title = '', body = '') {
        this.newNoteBodyField.click()
        this.newNoteBodyField.sendKeys(body)
        this.newNoteTitleField.click()
        this.newNoteTitleField.sendKeys(title)
        element(by.buttonText('Save')).click()
        if (title !== '' && body !== '') {
            browser.wait(EC.presenceOf(this.noteFirst), browser.params.customTimeout,
                'Success notification should be visible after note creation')
        }
    }

    archiveNote() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconArchive.click()
        // this.notificationSuccess.getAttribute('innerHTML')
        //     .then((text) => console.log('===== ' + text))
        browser.wait(EC.presenceOf(this.notificationSuccess), browser.params.customTimeout,
            'Success notification should be visible after note archivation')
        this.menu.openArchiveNotesPage()
    }
}

// Exports this page object to use it in all other files
module.exports.NotesPage = NotesPage
