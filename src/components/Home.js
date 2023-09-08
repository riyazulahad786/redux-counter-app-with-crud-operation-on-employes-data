import React from "react";
import { Button, Badge, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link,useNavigate } from "react-router-dom";
function Home() {
  const history = useNavigate()
  console.log(Employees);


   const handleEdit = (id,name,age) => {
    localStorage.setItem("name",name)
    localStorage.setItem("age",age)
    localStorage.setItem("id",id)


   }
  const handleDelete = (id) => {
    var index = Employees.map(function(e){
     return e.id
    }).indexOf(id)
    Employees.splice(index,1);
    history("/")
  }
  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                      <Link to={"/editEmployeesDetails"}>
                      <Button onClick={()=>{handleEdit(item.id,item.name,item.age)}}>Edit</Button>
                      </Link> 
                      &nbsp;
                      <Button onClick={()=>{handleDelete(item.id)}}>Delete</Button>


                      </td>
                    </tr>
                  );
                })
              : "No data found"}
          </tbody>
        </Table>
        <br/>

        <Link className="d-grid gap-2" to={"/create"}>
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
