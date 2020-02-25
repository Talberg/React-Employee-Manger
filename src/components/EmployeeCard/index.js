import React from "react";
import "./style.css";

function EmployeeCard(props) {
  console.log(props.department)
  return (
    <div className="card">
     
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
        
        </ul>
      </div>
    
    </div>
  );
}

export default EmployeeCard;
