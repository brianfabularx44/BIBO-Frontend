import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.160.160:5000',
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data,application/www-form-urlencoded",
  }
});

const endpoints = {
  //Events endpoints
  getAllEvents: () => _api.get('/events'),
  createEvents: (eventData) => api.post('events/create_event', eventData),
  
  //Event Organizer endpoints
  registerForEvent: (eventId, userData) => api.post(`/event_organizer/${eventId}/register`, userData),
  login: (userData) => api.post('/event_organizer/login', userData),
  logout: () => api.get('/event_organizer/logout'),

  //Runners endpoints
  getAllRunners: () => api.get('/runners/'),
  getRunnerById: (runnerId) => api.get(`/runners/${runnerId}`),
  addRunner: (eventId, runnerData) => api.post(`/runners/${eventId}/registration`, runnerData),
}

export { instance, endpoints};
