import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostRecord(props) {

    const [formdata, setFormData] = useState({});
    const navigate = useNavigate();

    
    function HandlerSubmit(e)
    {
        e.preventDefault();
        console.log(formdata);
        axios.post('http://localhost:6500', formdata)
        .then(msg=>{
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
    <form onSubmit={HandlerSubmit}>
        <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input onChange={(e)=>setFormData({...formdata, name:e.target.value})} className='form-control' type="text"/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Mobile</label>
            <input onChange={(e)=>setFormData({...formdata, mobile:e.target.value})} className='form-control' type="text"/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>City</label>
            <input onChange={(e)=>setFormData({...formdata, city:e.target.value})} className='form-control' type="text"/>
        </div>
        
        <div className='mb-3'>
            <button className='btn btn-primary'>Submit</button>
        </div>

    </form>
    </div>
        </>
    );
}

export default PostRecord;
