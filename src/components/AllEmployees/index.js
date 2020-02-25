import React from 'react'
import employeeList from "../../Employee.json";
import EmployeeCard from "../EmployeeCard";
import Title from "../Title";
import Wrapper from '../Wrapper'









function AllEmployees(){
    return(
        <Wrapper>
    {employeeList.map(employee =>  (
    

        <EmployeeCard
         
     
           // removeEmployee={}
           id={employee.id}
           key={employee.id}
           name={employee.name}
           department={employee.department}
           location={employee.location}
           />))}
    
    </Wrapper>
        )}

export default AllEmployees