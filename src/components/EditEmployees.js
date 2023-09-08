import React,{useEffect, useState} from 'react'
import { Button,Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuid} from 'uuid'
import Employees from './Employees';
import { Link,useNavigate } from 'react-router-dom';
function EditEmployees() {
  const history = useNavigate();
  const [name,setName]=useState("")
  const [age,setAge] = useState("")
  const [id,setId]=useState("")

  var index = Employees.map(function(e){
    return e.id
   }).indexOf(id)


   const handleSubmit=(e)=>{
    e.preventDefault();
    let a = Employees[index]
    a.name = name
    a.age =age
    history("/")
 }
 useEffect(()=>{
  setName(localStorage.getItem("name"))
  setAge(localStorage.getItem("age"))
  setId(localStorage.getItem("id"))

 })
  return (
    <div>

<Form className='d-grid gap-2'  style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId='firstName'>
             <Form.Control type='text' placeholder='Enter your name....' value={name} required onChange={(e)=>{setName(e.target.value)}}>

             </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='age'>
             <Form.Control type='text' placeholder='Enter your age....' value={age} required onChange={(e)=>{setAge(e.target.value)}}>

             </Form.Control>
        </Form.Group>
        <Button type='submit' onClick={(e)=>{handleSubmit(e)}}>Edit Employee</Button>
    </Form>
    </div>
  )
}

export default EditEmployees
