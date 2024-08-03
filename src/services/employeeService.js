import axios from 'axios';

const API_URL = 'https://api.cosmocloud.com'; // Replace with the actual API URL

export const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await axios.get(`${API_URL}/employees/${id}`);
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axios.post(`${API_URL}/employees`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/employees/${id}`);
};
