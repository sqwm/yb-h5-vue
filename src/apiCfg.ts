import axios from 'axios';
import router from './router';
import store from './store';

axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = JSON.parse(token);
    }
    return config;
  },
  (err) => Promise.reject(err),
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0) {
      store.dispatch('setShowApiToast', response.data.msg);
    }
    return response;
  },
  (error) => { // 默认除了2XX之外的都是错误的，就会走这里
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.dispatch('setShowApiToast', '权限错误，请重新登录');
          router.replace({ name: 'login' });
          break;
        case 403:
          store.dispatch('setShowApiToast', '注册失败，该手机号码已经被注册');
          break;
        default:
          store.dispatch('setShowApiToast', error.response.data.msg);
      }
    }
    return Promise.reject(error.response);
  },
);

export default instance;
