class MenuFragment {
    constructor(navBarElem) {
        this.navBarElem = navBarElem
        this.menuElem = this.navBarElem.$('.dropdown.open .dropdown-menu')

        this.createOptionSelector = (optionText) => `//*[ancestor::*[@class="dropdown open"]
            and text()="${optionText}"]`

        this.optionArchiveNotes = this.menuElem.element(by.xpath(
            this.createOptionSelector('Archive Notes')))
        this.optionMyNotes = this.menuElem.element(by.xpath(
            this.createOptionSelector('My Notes')))
        this.optionRecycleBin = this.menuElem.element(by.xpath(
            this.createOptionSelector('Recycle Bin')))
        this.optionAbout = element(by.xpath(this.createOptionSelector('About')))
    }

    clickArchiveNoteOption() {
        this.optionArchiveNotes.click()
    }
    clickMyNotesOption() {
        this.optionMyNotes.click()
    }
    clickRecycleBinOption() {
        this.optionRecycleBin.click()
    }
    clickAboutOption() {
        this.optionAbout.click()
    }

}

class MenuActionsFragment {

    constructor() {
        this.navBarElem = $('.navbar')
        this.buttonOptions = this.navBarElem.$('.navbar-right a.dropdown-toggle')

        this.menu = new MenuFragment(this.navBarElem)
    }

    _openMenu() {
        this.buttonOptions.click()
        browser.wait(EC.elementToBeClickable(this.menu.menuElem), browser.params.customTimeout,
            'Menu should be present on the page after open')

        return this.menu
    }

    openArchiveNotesPage() {
        this._openMenu().clickArchiveNoteOption()
        browser.wait(EC.and(EC.presenceOf(this.buttonOptions), EC.elementToBeClickable(this.buttonOptions)),
            browser.params.customTimeout, 'Menu options button should be visible after page open')
    }
    openMyNotesPage() {
        this._openMenu().clickMyNotesOption()
        browser.wait(EC.and(EC.presenceOf(this.buttonOptions), EC.elementToBeClickable(this.buttonOptions)),
            browser.params.customTimeout, 'Menu options button should be visible after page open')
    }
    openRecycleBinPage() {
        this._openMenu().clickRecycleBinOption()
        browser.wait(EC.and(EC.presenceOf(this.buttonOptions), EC.elementToBeClickable(this.buttonOptions)),
            browser.params.customTimeout, 'Menu options button should be visible after page open')
    }
    openAboutPage(elem) {
        this._openMenu().clickAboutOption()
        browser.wait(EC.elementToBeClickable(elem), browser.params.customTimeout,
            'Elem on About page should be visible after page open')
    }

}

module.exports.MenuActionsFragment = MenuActionsFragment
