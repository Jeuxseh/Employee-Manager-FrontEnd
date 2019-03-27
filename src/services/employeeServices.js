import axios from 'axios';

class EmployeeService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  createEmployee(body) {
    return this.api.post('/api/employee', body)
      .then(({data}) => data)
  }
}

const employeeService = new EmployeeService();
export default employeeService;
