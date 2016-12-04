let BasePage = require('./BasePage.js').BasePage
let EC = protractor.ExpectedConditions

class ArchivePage extends BasePage {

    constructor() {
        super()
        this.iconUnarchive = $('[title="Unarchive"] > .fa-upload')
        this.iconDelete = $('[title="Delete"] > .fa-trash')
    }

    unarchiveNote() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconUnarchive.click()
        browser.wait(EC.presenceOf(this.notificationSuccess), browser.params.customTimeout,
            'Success notification should be visible after note unarchiving')
    }

    deleteNote() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconDelete.click()
        browser.wait(EC.presenceOf(this.notificationSuccess), browser.params.customTimeout,
            'Success notification should be visible after note deletion')
    }
}

// Exports this page object to use it in all other files
module.exports.ArchivePage = ArchivePage
