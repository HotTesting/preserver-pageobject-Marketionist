let MenuActionsFragment = require('./fragments/MenuActionsFragment.js').MenuActionsFragment

class BasePage {

    constructor() {

        this.menu = new MenuActionsFragment()

        this.notificationSuccess = $('.notes-notifications.success')
        this.noteFirst = this.getNotes().first()
    }

    // Gets collection of all notes on the page
    getNotes() {
        return $$('.grid-container .grid-item')
    }

}

// Exports this page object to use it in all other files
module.exports.BasePage = BasePage
