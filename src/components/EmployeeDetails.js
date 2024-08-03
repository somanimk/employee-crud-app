import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../services/employeeService';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const data = await getEmployeeById(id);
    setEmployee(data);
  };

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {employee.name}</p>
      <p>Address: {employee.address.line1}, {employee.address.city}, {employee.address.country}, {employee.address.zip_code}</p>
      <h2>Contact Methods</h2>
      <ul>
        {employee.contact_methods.map((contact, index) => (
          <li key={index}>{contact.contact_method}: {contact.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDetails;


// The useParams hook from react-router-dom is used to access the parameters of the current route. 
// This is particularly useful when you have dynamic routes where parts of the URL can change based 
// on the data you want to display.

// In the context of your application, useParams can be used in the EmployeeDetails component to
//  get the id of the employee from the URL and fetch/display the relevant employee details.
