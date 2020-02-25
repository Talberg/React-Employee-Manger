import React, { useState,  Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employeeList from "./Employee.json";
import AllEmployees from "./components/AllEmployees"
import NavTabs from './components/NavTabs'
import FrontEnd from "./components/FrontEnd"
import BackEnd from "./components/BackEnd"


const App = ()=>{
 










  return (
    <Router>
      <NavTabs></NavTabs>
      <div>
       
        <Route exact path="/" ><Title>Use the Tabs above to navigate through your employees</Title></Route>
        <Route exact path="/allemployees"> <Title>All Employees</Title><AllEmployees></AllEmployees></Route> 
        <Route exact path="/frontend" component={FrontEnd} />
        <Route path="/backend" component={BackEnd} />
      </div>
    </Router>
  );

}




export default App;
