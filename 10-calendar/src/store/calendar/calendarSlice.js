import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Mi cumpleaños',
    notes: 'Me tienen q regalar cosas',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Joaco'
    }
}


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, {payload})=>{
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, {payload})=>{
            state.events.push(payload);
            state.activeEvent = null;
        },

        onUpdateEvent: (state, {payload})=>{
            state.events.map(event => {
                if(event._id === payload._id){
                    return payload;
                }
            })
        },

        onDeleteEvent: (state) => {
            if(state.activeEvent){
                state.events = state.events.filter(event => event._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
        }
    }
});
export const { onSetActiveEvent, onDeleteEvent, onAddNewEvent, onUpdateEvent } = calendarSlice.actions;