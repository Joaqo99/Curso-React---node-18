import { async } from '@firebase/util'
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { fileUpload } from '../../helpes/fileUpload'
import { loadNotes } from '../../helpes/loadNotes'
import { addNewEmptyNote, creatingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote, deleteNoteById } from './journalSlice'


export const startNewNote = ()=>{
    return async (dispatch, getState) => {

        dispatch(creatingNewNote())

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageURL: [],
        }

        const newDoc = doc(collection( FirebaseDB, `${uid}/journal/notes`))
        await setDoc( newDoc, newNote)

        newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth
        if(!uid) throw new Error('El uid del usuario no está establecido')
        
        const notes = await loadNotes(uid)

        dispatch(setNotes(notes))
    }
}

export const startSavingNote = () =>{
    return async (dispatch, getState) =>{
        dispatch(setSaving())

        const { uid } = getState().auth
        const { active:note } = getState().journal

        const noteToFireStore = {...note}
        delete noteToFireStore.id

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, {merge: true})

        dispatch(updateNote(note))
    }
}

export const startLoadingFiles = (files = [] ) => {
    return async (dispatch) => {
        dispatch(setSaving())

        const fileUploadPromises = []
        for(const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosURL = await Promise.all(fileUploadPromises)

        dispatch(setPhotosToActiveNote(photosURL))
    }
}

export const startDeletingNote = () =>{
    return async (dispatch, getState) =>{
        const {uid} = getState().auth
        const {active: note} = getState().journal

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await deleteDoc(docRef)

        dispatch(deleteNoteById(note.id))
    }
}