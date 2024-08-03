import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState({ line1: "", city: "", country: "", zip: "" });
  const [contacts, setContacts] = useState([{ contact_method: "EMAIL", value: "" }]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare employee data
    const employeeData = {
      name,
      address,
      contacts
    };

    try {
      // Call API to add employee
      const response = await fetch("https://your-api-endpoint.com/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeData)
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      // Redirect to employee list page
      navigate("/");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={address.line1}
        onChange={(e) => setAddress({ ...address, line1: e.target.value })}
        placeholder="Address Line 1"
        required
      />
      <input
        type="text"
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
        placeholder="City"
        required
      />
      <input
        type="text"
        value={address.country}
        onChange={(e) => setAddress({ ...address, country: e.target.value })}
        placeholder="Country"
        required
      />
      <input
        type="text"
        value={address.zip}
        onChange={(e) => setAddress({ ...address, zip: e.target.value })}
        placeholder="Zip Code"
        required
      />
      <input
        type="text"
        value={contacts[0]?.value || ""}
        onChange={(e) => setContacts([{ ...contacts[0], value: e.target.value }])}
        placeholder="Contact Email or Phone"
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
