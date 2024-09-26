import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInqueries, getInqueriesAsync } from "../../store/contactSlice";
import { RingLoader } from "react-spinners";

const ClientsTable = () => {
    const dispatch = useDispatch();
    const { loading, inqueries }= useSelector(state => state.contacts);
    const sorted =[...inqueries].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    useEffect(()=> {
        const token = localStorage.getItem('token')
        if (inqueries.length == 0) dispatch(getInqueriesAsync(token))
    }, [inqueries, dispatch])
    if (loading) {
        return <div className="p-4">
                    <div className="w-50 m-auto">
                        <div className="d-flex justify-content-center">
                            <RingLoader/>
                        </div>
                        <p className="fs-3">Cargando consultas...</p>
                    </div>
                </div>
    }
    return (
        <div className="p-4">
            {inqueries.length > 0 ? 
            (
                <div>

                    <div className="text-center">
                        <p className="fs-3 fw-semibold">Consultas</p>
                    </div>
                    <div className="contain-table">
                        
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Name</th>
                                <th scope="col">Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inqueries.length > 0 && 
                                    sorted.map(e => (
                                        <tr key={e._id}>
                                            <th scope="row">{e.createdAt.split('T')[0]}</th>
                                            <td>{e.name}</td>
                                            <td>{e.number}</td>
                                            <td>{e.email}</td>
                                            <td>{e.message}</td>
                                          </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            ) 
                : 
            (
                <div className="text-start">
                    <p>No hay consultas por el momento</p>
                </div>
            )
            
            }
                    
        </div>
    )
};
export default ClientsTable;