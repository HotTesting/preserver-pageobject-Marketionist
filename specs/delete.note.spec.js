// Imports page objects from other files
let NotesPage = require('./../pageObjects/NotesPage.js').NotesPage
let ArchivePage = require('./../pageObjects/ArchivePage.js').ArchivePage

describe('Delete note tests:', function () {
    let notesPage = new NotesPage()
    let archivePage = new ArchivePage()

    // TODO: write tests for delete note (delete forever, restore) - click on icons
    it('note should be deleted', function () {

        notesPage.createNote('Test', 'Test')
        archivePage.deleteNote()
        notesPage.menu.openRecycleBinPage()

        // TODO: change notesPage.getNotes() to recycleBinPage when PO will be ready
        expect(notesPage.getNotes().count()).toBe(1,
            'Deleted notes count should be 1 after it was deleted')
    })

})
