import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


const UpdatePage = () => {
    let navigate=useNavigate();
    let {id}= useParams();

    // eslint-disable-next-line no-unused-vars
    const [Existing,SetExisting]=useState(null)

    const ExistingInfo=async (id)=>{
        let res=await axios.get(`/api/ReadByID/${id}`)
        SetExisting(res.data['row'][0])
    }

    useEffect(() => {
        (async ()=>{
            await ExistingInfo(id)
        })()
    }, []);


    // eslint-disable-next-line no-unused-vars
    const UpdateData=async (event)=>{

        event.preventDefault();





        await axios.post(`/api/Update/${id}`,{

        })

        navigate("/")


    }


    return (

        </div>
    );
};

export default UpdatePage;