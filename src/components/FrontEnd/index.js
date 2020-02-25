import React from "react"
import EmployeeList from '../../Employee.json'
import EmployeeCard from "../EmployeeCard"
import Wrapper from "../Wrapper"
function FrontEnd (){
    const frontend =  EmployeeList.filter(employee => employee.department === "frontend")

   
    return(
        <Wrapper>
    {frontend.map(employee =>  (
    

        <EmployeeCard
         
     
           // removeEmployee={}
           id={employee.id}
           key={employee.id}
           name={employee.name}
           department={employee.department}
           location={employee.location}
           />))}
    
    </Wrapper>
        )    

}
export default FrontEnd