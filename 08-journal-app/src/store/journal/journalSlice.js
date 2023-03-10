import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaves: '',
        notes: [],
        active: null,
    },
    reducers: {
        creatingNewNote: (state)=>{
            state.isSaving = true;
        },

        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },

        setActiveNote: (state, action)=>{
            state.active = action.payload
            state.messageSaved = ``
        },

        setNotes: (state, action)=>{
            state.notes = action.payload
        },

        setSaving: (state)=>{
            state.isSaving = true
        },

        updateNote: (state, action)=>{
            state.isSaving = false
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id){
                    return action.payload
                } 

                return note
            })

            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },

        deleteNoteById: (state, action)=>{
            state.active = null
            state.notes = state.notes.filter(note => note.id !== action.payload )
        },

        clearNotesLogout: (state)=>{
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.active = null
        },

        setPhotosToActiveNote: (state, action)=>{
            state.active.imageURL = [...state.active.imageURL, ...action.payload]
            state.isSaving = false
        }
    }
});
export const { creatingNewNote, clearNotesLogout, setPhotosToActiveNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById} = journalSlice.actions;