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

  getEmployee(id) {
    return this.api.get(`/api/employee/${id}`)
      .then(({data}) => data)
  }

  editEmployee(id, body) {
    return this.api.put(`/api/employee/${id}`, body)
    .then(({data}) => data)
  }

  deleteEmployee(id) {
    return this.api.delete(`/api/employee/${id}`)
    .then(({data}) => data)
  }
}

const employeeService = new EmployeeService();
export default employeeService;
