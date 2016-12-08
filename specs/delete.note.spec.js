// Imports page objects from other files
let NotesPage = require('./../pageObjects/NotesPage.js').NotesPage
let RecycleBinPage = require('./../pageObjects/RecycleBinPage.js').RecycleBinPage

describe('Delete note tests', function () {
    let notesPage = new NotesPage()
    let recycleBinPage = new RecycleBinPage()

    // TODO: write tests for delete note (delete forever, restore) - click on icons
    it('note should be deleted', function () {

        notesPage.createNote('Test', 'Test')
        recycleBinPage.deleteNote('successfully')
        recycleBinPage.menu.openRecycleBinPage()

        expect(recycleBinPage.getNotes().count()).toBe(1,
            'Deleted notes count should be 1 after it was deleted')
    })

    it('note should be deleted forever', function () {

        notesPage.createNote('Test', 'Test')
        recycleBinPage.deleteNote('successfully')
        recycleBinPage.menu.openRecycleBinPage()
        recycleBinPage.deleteNote('forever')

        expect(recycleBinPage.getNotes().count()).toBe(0,
            'Deleted notes count should be 0 after it was deleted')
    })

    it('note should be restored', function () {

        notesPage.createNote('Test', 'Test')
        recycleBinPage.deleteNote('successfully')
        recycleBinPage.menu.openRecycleBinPage()
        recycleBinPage.restoreNote()
        recycleBinPage.menu.openMyNotesPage()

        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was restored')
    })

})
