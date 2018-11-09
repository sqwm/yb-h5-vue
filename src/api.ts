import api from './apiCfg';

export default {
  getOptions() {
    return api.get('/api/base/options');
  },
  register(params: object) {
    return api.post('/api/user/addparent', params);
  },
  login(params: object) { 
    return api.post('/api/user/login', params);
  },
  updatePassword(id: number, params: object) {
    return api.put(`/api/user/${id}/password`, params);
  },
};
