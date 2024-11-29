import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            name: 'Compra-venta',
            photo: 'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/casa/Casa%20Perla/1728056892873'
        },
        {
            name: 'Alquiler',
            photo: 'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/apartamento/Residencial%20Aqua/1728052221400'
        },
        {
            name:'Certificados en catastro, predical y RPPC',
            photo:'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/terreno/Terreno%20Rosarito/1728060649243'
        },
        {
            name:'Avaluos y levantamientos',
            photo: 'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/terreno/Terreno%20Seccion%20Monumental/1728060377971',
        },
        {
            name:'Juicios Sucesorios Reivindicatorios, Prescripción, Desalojos (desahucio), testamentos.',
            photo:'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/apartamento/Edificio%20Farallon/1728052723254',
        },
        {
            name:'Gestión notarial y administrativa',
            photo:'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/apartamento/Residencial%20Aqua/1728052247202'
        },
        {
            name:'Licencias de construcción',
            photo:'https://firebasestorage.googleapis.com/v0/b/inmob-tijuana.appspot.com/o/propiedades%2Fcasa%2FVilla%20Mar%2F1728056150117?alt=media&token=d1982758-5cec-4aa2-98ac-43176d57c4d6'
        },
        {
            name:'Despalme y movimiento de tierra',
            photo:'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/terreno/Valle%20de%20Guadalupe/1728060510653'
        },
        {
            name:'Subdivisiones de lotes y manzanas',
            photo:'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/casa/Lomas%20de%20la%20Libertad/1728057632794'
        },
        {
            name:'Gestión de régimen de condominio',
            photo:'https://storage.googleapis.com/inmob-tijuana.appspot.com/propiedades/terreno/Valle%20de%20Guadalupe/1728060504755'
        }      
    ]
}
const serviceSlice = createSlice({
    name: 'services',
    initialState,
});
export const getServices = state => state.service.data;
export default serviceSlice.reducer