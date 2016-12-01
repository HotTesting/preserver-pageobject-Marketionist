// Imports page objects from other files
let NotesPage = require('./../pageObjects/NotesPage.js').NotesPage

describe('Create note tests:', function () {
    let notesPage = new NotesPage()

    it('note should be created when title and body provided', function () {

        notesPage.createNote('Test', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
    })

    it('note should be created when only title provided', function () {

        notesPage.createNote('Test', '')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
    })

    it('note should be created when only body provided', function () {

        notesPage.createNote('', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
    })

    it('note should NOT be created when nothing provided', function () {

        notesPage.createNote('', '')
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
    })

})
