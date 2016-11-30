// Imports page objects from other files
let NotesPage = require('./../pageObjects/NotesPage.js').NotesPage
let ArchivePage = require('./../pageObjects/ArchivePage.js').ArchivePage

describe('Archive note tests:', function () {
    let notesPage = new NotesPage()
    let archivePage = new ArchivePage()

    it('note should be archived', function () {

        notesPage.createNote('Test', 'Test')
        notesPage.archiveNote()

        expect(notesPage.getNotes().count()).toBe(1,
            'Archived notes count should be 1 after it was archived')
    })

    it('note should be unarchived', function () {

        notesPage.createNote('Test', 'Test')
        notesPage.archiveNote()
        archivePage.unarchiveNote()

        expect(notesPage.getNotes().count()).toBe(1,
            'Unarchived notes count should be 1 after it was unarchived')
    })

    it('archived note should be deleted', function () {

        notesPage.createNote('Test', 'Test')

        notesPage.archiveNote()

        archivePage.deleteNote()

        expect(notesPage.getNotes().count()).toBe(1,
            'Deleted notes count should be 1 after it was deleted')
    })

})
