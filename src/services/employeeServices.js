import axios from 'axios';

class EmployeeService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  getAll() {
    return this.api.get('/api/employees')
      .then(({data}) => data)
  }

  createEmployee(body) {
    return this.api.post('/api/employee', body)
      .then(({data}) => data)
  }

  getOne(id) {
    return this.api.get(`/api/employees/${id}`)
      .then(({data}) => data)
  }
}

const employeeService = new EmployeeService();
export default employeeService;
