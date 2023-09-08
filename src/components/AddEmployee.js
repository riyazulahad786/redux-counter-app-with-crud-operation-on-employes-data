import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuid} from 'uuid'
import Employees from './Employees';
import { Link,useNavigate } from 'react-router-dom';
function AddEmployee() {
    const history = useNavigate();
    const [name,setName]=useState("")
    const [age,setAge] = useState("")

    const handleSubmit=(e)=>{
       e.preventDefault();
       const ids = uuid();
       console.log(ids)
       const uniqueId = ids.slice(0,8)
       let a=name,b=age
       Employees.push({id:uniqueId,name:a,age:b})
       history("/")
    }
  return (
    <div>
    <h1>AddEmployee</h1>
    <Form className='d-grid gap-2'  style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId='firstName'>
             <Form.Control type='text' placeholder='Enter your name....' required onChange={(e)=>{setName(e.target.value)}}>

             </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='age'>
             <Form.Control type='text' placeholder='Enter your age....' required onChange={(e)=>{setAge(e.target.value)}}>

             </Form.Control>
        </Form.Group>
        <Button type='submit' onClick={(e)=>{handleSubmit(e)}}>Add Employee</Button>
    </Form>
    </div>
  )
}

export default AddEmployee