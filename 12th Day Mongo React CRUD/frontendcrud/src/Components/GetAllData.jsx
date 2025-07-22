import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function GetAllData(props) {
    
  const [data, setData] = useState([]);
  const [ok, setOk] = useState(0);
  
  const navigate = useNavigate();

  async function getData()
  {
    const d = await axios.get('http://localhost:6500');
    setData(d.data);
  }
  
  useEffect(()=>{
    getData();
  },[ok])
  function HandlerDelete(mobile)
  {
    axios.delete('http://localhost:6500/'+mobile)
    .then(msg=>{
      console.log(msg);
      setOk(ok+1);
    })
    .catch(err=>{
      console.log(err);
    })
  }
    return (
        <div className='offset-md-2 col-md-8'>
        <button onClick={()=>navigate('/postrecord')} className='btn btn-primary mb-3'>Add Record</button>
           
           
           
            <table className='table table-dark table-striped'>
            <thead>
                  <tr>
                    <td>Name</td>
                    <td>Mobile</td>
                    <td>City</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
            </thead>
             <tbody>
             {
                data.map(row=>(
                  <tr id={row.id}>
                    <td>{row.name}</td>
                    <td>{row.mobile}</td>
                    <td>{row.city}</td>
                    <td><button onClick={()=>navigate('/edit/'+row.mobile)} className='btn btn-warning'>Edit</button></td>
                    <td><button onClick={()=>confirm('Are you sure to Delete?')?HandlerDelete(row.mobile):alert("Okay Happy Stay.!")} className='btn btn-danger'>Delete</button></td>
                  </tr>
                ))
              }
             </tbody>
            </table>
          </div>
    );
}

export default GetAllData;