import { createSlice } from "@reduxjs/toolkit";
import  rene  from "/images/barbara-profile.jpeg";
import  barbara  from "/images/rene-profile.jpeg";
const initialState = {
    info :[
        {
            name:'Bárbara Dolores Méndez Guimará',
            role: "Presidenta de Plexis Corp. S.A de C.V",
            phoneNumber: "Teléfono Cel (664) 386-9950 Casa (664)630-1258  oficina (664)680-2458",
            experience: "Lic. Administración de Empresa, Derecho Inmobiliario, Asesor profesional con licencia Inmobiliaria en Bienes Raíces.",
            year: "30 años acreditados.  Miembro de APIT y AMPI asociación de Bienes Raíces de Tijuana",
            avatar: rene
        },
        {
            name:'Rene Rafael Bañuelos Urquidi',
            role: false,
            phoneNumber:'Teléfono Cel (664) 421-5871 oficina (664)680-2458.',
            experience: 'Lic. En Derecho, Derecho Inmobiliario, Asesor profesional con licencia Inmobiliaria en Bienes Raíces. ',
            year: '10 años acreditados.  Miembro de APIT y AMPI asociación de Bienes Raíces de Tijuana.',
            avatar: barbara
        }
    ]
}
const ownerSlice = createSlice({
    name:'owners',
    initialState,

});
export const getOwners = state => state.owner.info;
export default ownerSlice.reducer;