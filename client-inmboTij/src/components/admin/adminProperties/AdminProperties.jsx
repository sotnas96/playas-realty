import CardContainer from "../../../components/cardContainer/CardContainer";

const AdminProperties = () => {


    
    return (

        <div className="p-2 w-100 bg-white">
            <div className="text-start mx-2">
                <button className="admin-panel-button">
                    <p className="m-0">Filter</p>
                </button>
            </div>
            <CardContainer />
        </div>
    )
};
export default AdminProperties;