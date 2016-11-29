let EC = protractor.ExpectedConditions

class BasePage {

    constructor() {
        // TODO - find a way to add blocking wait for notification to appear
        this.notificationSuccess = $('.notes-notifications.success')

        this.noteFirst = this.getNotes().first()
        this.buttonOptions = $('.navbar-right .glyphicon-option-vertical')

        this.createOptionSelector = (optionText) => `//*[ancestor::*[@class="dropdown open"]
            and text()="${optionText}"]`

        this.optionArchiveNotes = element(by.xpath(this.createOptionSelector('Archive Notes')))
        this.optionMyNotes = element(by.xpath(this.createOptionSelector('My Notes')))
        this.optionRecycleBin = element(by.xpath(this.createOptionSelector('Recycle Bin')))
        this.optionAbout = element(by.xpath(this.createOptionSelector('About')))
    }

    // Gets collection of all notes on the page
    getNotes() {
        return $$('.grid-container .grid-item')
    }

    goTo(option, elem = this.buttonOptions) {
        this.buttonOptions.click()
        option.click()
        browser.wait(EC.and(EC.presenceOf(elem), EC.visibilityOf(elem)),
            browser.params.customTimeout, 'Menu options button should be visible after page open')
    }

}

// Exports this page object to use it in all other files
module.exports.BasePage = BasePage
