// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Link} from "react-router-dom";


function Loader() {
    return null;
}

const ReadPage = () => {

    // eslint-disable-next-line no-unused-vars
    const [Data,SetData]=useState([]);

    useEffect(() => {
        (async ()=>{
            await ReadData()
        })()
    }, []);


    const ReadData=async ()=>{
        let res=await axios.get("/api/Read");
        SetData(res.data['row'])
    }

    // eslint-disable-next-line no-unused-vars
    const DeleteData=async (id)=>{
        await axios.get(`/api/Delete/${id}`);
        await ReadData()
    }
    return (
        <div>
        </div>
    );
};

export default ReadPage;