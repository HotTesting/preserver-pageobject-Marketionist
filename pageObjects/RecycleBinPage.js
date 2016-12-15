let BasePage = require('./BasePage.js').BasePage

class RecycleBinPage extends BasePage {

    constructor() {
        super()
        this.iconDelete = $('[title*="Delete"] > .fa-trash')
        this.iconRestore = $('[title="Restore"] > .fa-undo')
        this.buttonConfirm = $('[data-dismiss="modal"].btn-primary')
    }

    deleteNote(status) {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconDelete.click()
        if (status === 'successfully') {
            browser.wait(EC.presenceOf(this.notificationSuccess), browser.params.customTimeout,
                'Success notification should be visible after note deletion')
        } else if (status === 'forever') {
            browser.wait(EC.elementToBeClickable(this.buttonConfirm), browser.params.customTimeout,
                'Delete button inside the modal window should be clickable')
            this.buttonConfirm.click()
        }
    }

    restoreNote() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconRestore.click()
        browser.wait(EC.presenceOf(this.notificationSuccess), browser.params.customTimeout,
            'Success notification should be visible after note deletion')
    }
}

// Exports this page object to use it in all other files
module.exports.RecycleBinPage = RecycleBinPage
