let BasePage = require('./BasePage.js').BasePage

class NotesPage extends BasePage {

    constructor() {
        super()
        this.newNoteBodyField = $('.note-editor textarea')
        this.newNoteTitleField = $('.note-editor input[placeholder="Title"]')
        this.iconArchive = $('[title="Archive"] > .fa-download')
        this.notificationSuccess = $('.notes-notifications.success')
    }

    // Creates note on the page
    createNote(title, body) {
        this.newNoteBodyField.click()
        this.newNoteBodyField.sendKeys(body)
        this.newNoteTitleField.click()
        this.newNoteTitleField.sendKeys(title)
        element(by.buttonText('Save')).click()
        browser.sleep(browser.params.customTimeout)
    }

    archiveNote() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconArchive.click()
        this.goTo(this.optionArchiveNotes)
    }
}

// Exports this page object to use it in all other files
module.exports.NotesPage = NotesPage
