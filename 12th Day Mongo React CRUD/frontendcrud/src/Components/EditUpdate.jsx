import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditUpdate(props) {

    const [formdata, setFormData] = useState({});
    const  {mobile} = useParams();

    const navigate = useNavigate();
    async function getSingleRecord()
    {
        const d = await axios.get('http://localhost:6500/'+mobile);
        const [t] = d.data;
        setFormData(t); 
    }
    useEffect(()=>{
        getSingleRecord();
    },[]);


    function HandlerUpdate(e)
    {
        e.preventDefault();
        console.log(formdata);
        axios.put('http://localhost:6500/'+mobile, formdata)
        .then(msg => {

            console.log(msg);
            navigate('/');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
    <div className='offset-md-3 shadow mt-3 col-md-6'>
    <h1>Editing Data.....</h1>
    <form onSubmit={HandlerUpdate}>
        <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input value={formdata.name} onChange={(e)=>setFormData({...formdata, name:e.target.value})} className='form-control' type="text"/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Mobile</label>
            <input value={formdata.mobile} readOnly onChange={(e)=>setFormData({...formdata, mobile:e.target.value})} className='form-control' type="text"/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>City</label>
            <input value={formdata.city} onChange={(e)=>setFormData({...formdata, city:e.target.value})} className='form-control' type="text"/>
        </div>
        
        <div className='mb-3'>
            <button className='btn btn-primary'>Submit</button>
        </div>

    </form>
    </div>
        </>
    );
}

export default EditUpdate;