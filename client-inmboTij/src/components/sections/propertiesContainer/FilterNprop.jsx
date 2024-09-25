import { useEffect, useState } from 'react';
import CardContainer from '../../cardContainer/CardContainer';
import "./propertiesSection.css"

const filterProps = {
    category: '',
    type: '',
}
const FilterNprop = () => {
    const [filter, setFilter] = useState(filterProps)
    const handleFilterInput = event => {
        setFilter({...filter, [event.target.name]: event.target.value});
    }
    const cleanFilters = () => {
        setFilter(filterProps)
    }
    return (
        <>
            <div className>
                <form action="bg-white">
                    <div  className='d-flex rounded-4 bg-white'>
                        <div className='div-form border-end'>
                            <select name="category" id="" className='select-form' value={filter.category} onChange={handleFilterInput}>
                                <option value=''selected disabled>Compra o venta</option>
                                <option  value="sale" className=''>Compra</option>
                                <option value="rent" className=''>Alquiler</option>

                            </select>
                        </div>
                        <div className='div-form'>
                            <select name="type" id="" className='select-form' value={filter.type} onChange={handleFilterInput}>
                                <option value="" selected disabled>Tipo de propiedad</option>
                                <option value="casa">Casa</option>
                                <option value="apartamento">Apartamento</option>
                                <option value="terreno">Terreno</option>
                            </select>
                        </div>
                    </div>
                    <div className='my-2'>
                        {/* <button  className='filter-button'>Aplicar</button> */}
                        <button type='button' className='filter-button' onClick={cleanFilters}>Limpiar filtros</button>
                    </div>
                    
                </form>
            </div>
            <CardContainer filter={filter}/>
        </>

    )
}
export default FilterNprop;