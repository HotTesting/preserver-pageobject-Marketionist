let BasePage = require('./BasePage.js').BasePage

class ArchivePage extends BasePage {

    constructor() {
        super()
        this.iconUnarchive = $('[title="Unarchive"] > .fa-upload')
    }

    unarchiveNote() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.iconUnarchive.click()
        browser.wait(EC.presenceOf(this.notificationSuccess), browser.params.customTimeout,
            'Success notification should be visible after note unarchiving')
    }

}

// Exports this page object to use it in all other files
module.exports.ArchivePage = ArchivePage
