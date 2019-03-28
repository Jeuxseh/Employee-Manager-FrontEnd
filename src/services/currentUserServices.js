import axios from 'axios';

class CurrentUserService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  getCurrentUser() {
    return this.api.get('/api/user')
      .then(({ data }) => data)

  }
}

const currentUserService = new CurrentUserService();
export default currentUserService;