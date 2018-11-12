import api from './apiCfg';

export default {
  getOptions() {
    return api.get('/api/base/options');
  },
  register(params: object) {
    return api.post('/api/user/register', params);
  },
  login(params: object) {
    return api.post('/api/user/login', params);
  },
  updatePassword(id: number, params: object) {
    return api.put(`/api/user/${id}/password`, params);
  },
  updateUser(id: number, params: object) {
    return api.put(`/api/user/${id}`, params);
  },
  uploadPhoto(params: object) {
    return api.post('/api/base/upload', params);
  },
};
