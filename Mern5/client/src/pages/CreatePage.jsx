
// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";



const CreatePage = () => {
    let  navigate=useNavigate();
    // eslint-disable-next-line no-unused-vars
    const CreateData=async (event)=>{

        event.preventDefault();

        let formData=new FormData(event.target);
        // eslint-disable-next-line no-unused-vars
        let ProductName=formData.get("ProductName");
        // eslint-disable-next-line no-unused-vars
        let  ProductCode=formData.get(" ProductCode");
        // eslint-disable-next-line no-unused-vars
        let Img=formData.get("Img");
        // eslint-disable-next-line no-unused-vars
        let UnitCode=formData.get("UnitCode");
        // eslint-disable-next-line no-unused-vars
        let  Qty=formData.get(" Qty");
        // eslint-disable-next-line no-unused-vars
        let TotalPrice=formData.get("TotalPrice");



        await axios.post("/api/v1/Create",{

            ProductName :ProductName,
            ProductCode :ProductCode,
            Img:Img,
            UnitCode:UnitCode,
            Qty:Qty,
            TotalPrice:TotalPrice

        })

        navigate("/")


    }
    return (
        <div className="container mt-5">
            <form onSubmit={CreateData}>
                <div className="row">
                    <div className="col-md-3">
                        <label>Title</label>
                        <input className="form-control form-control-sm" name="title" type="text" placeholder="title"/>
                    </div>
                    <div className="col-md-3">
                        <label>Price</label>
                        <input className="form-control form-control-sm" name="price" type="text" placeholder="title"/>
                    </div>
                    <div className="col-md-3">
                        <label>Discount</label>
                        <select className="form-select form-select-sm" name="discount">
                            <option value="">Select Option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                    </div>

                    <div className="col-md-3">
                        <label>Discount Price</label>
                        <input className="form-control form-control-sm" name="discount_price" type="text"
                               placeholder="title"/>
                    </div>

                </div>
                <button type="submit" className="btn btn-sm mt-3 btn-success">Submit</button>
            </form>
        </div>
    );
};

export default CreatePage;