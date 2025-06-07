import { createSlice } from '@reduxjs/toolkit';

const localizacaoSlice = createSlice ({
    name: 'localizacao',
    initialState: { latitude: null, longitude: null },
    reducers: { 
        atualizarLocalizacao: (state, action) => { 
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.latitude;
            
        },
    },
});

export const { atualizacarLocalizacao } = localizacaoSlice.actions;
export default localizacaoSlice.reduce;
