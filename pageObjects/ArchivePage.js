let BasePage = require('./BasePage.js').BasePage

class ArchivePage extends BasePage {

    constructor() {
        super()
        this.iconUnarchive = $('[title="Unarchive"] > .fa-upload')
        this.iconDelete = $('[title="Delete"] > .fa-trash')
    }

    unarchiveNote() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconUnarchive.click()
        this.goTo(this.optionMyNotes)
    }

    deleteNote() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconDelete.click()
        this.goTo(this.optionRecycleBin)
    }
}

// Exports this page object to use it in all other files
module.exports.ArchivePage = ArchivePage
