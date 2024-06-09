import React, {  useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewAll = () => {
    const [fisatdata,setData]=useState([])
    const fetchData=()=>
        [
            axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
                (response)=>{
                    setData(response.data)
                }
            ).catch().finally()
        ]
useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Nav/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">College</th>
      <th scope="col">DOB</th>
      <th scope="col">Course</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>

    </tr>
  </thead>
  <tbody>
 
 {fisatdata.map(
    (value,index)=>{
    return   <tr>  <td scope="row">{value._id}</td>
        <td>{value.firstname}</td>
        <td>{value.lastname}</td>
        <td>{value.college}</td>
        <td>{value.dob}</td>
        <td>{value.course}</td>
        <td>{value.mobile}</td>
        <td>{value.email}</td>
        <td>{value.address}</td>
      </tr>
    }
 )}
    
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewAll