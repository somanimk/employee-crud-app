import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../services/employeeService';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div>
      <h1>Employee List</h1>
      {employees.length === 0 ? (
        <p>No Employees in the system.</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.emp_id}>
              <Link to={`/employees/${employee.emp_id}`}>{employee.name}</Link>
              <button onClick={() => handleDelete(employee.emp_id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add">Add Employee</Link>
    </div>
  );
};

export default EmployeeList;
