// Imports page objects from other files
let NotesPage = require('./../pageObjects/NotesPage.js').NotesPage

describe('Create note tests', function () {
    let notesPage = new NotesPage()

    it('note should be created when title and body provided', function () {

        notesPage.createNote(notesPage.txtNoteTitle, notesPage.txtNoteBody)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
        expect(notesPage.getNotes().first().getText()).toContain(
            notesPage.txtNoteTitle, 'Note title should be set correctly')
        expect(notesPage.getNotes().first().getText()).toContain(
            notesPage.txtNoteBody, 'Note body should be set correctly')
    })

    it('note should be created when only title provided', function () {

        notesPage.createNote(notesPage.txtNoteTitle, notesPage.txtEmpty)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
        expect(notesPage.getNotes().first().getText()).toContain(
            notesPage.txtNoteTitle, 'Note title should be set correctly')
    })

    it('note should be created when only body provided', function () {

        notesPage.createNote(notesPage.txtEmpty, notesPage.txtNoteBody)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after it was created')
        expect(notesPage.getNotes().first().getText()).toContain(
            notesPage.txtNoteBody, 'Note body should be set correctly')
    })

    it('note should NOT be created when nothing provided', function () {

        notesPage.prepareNote(notesPage.txtEmpty, notesPage.txtEmpty)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
    })

})
