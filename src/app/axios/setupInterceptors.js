import { refresh } from '../redux/slices/auth/auth';
import axiosInstance from './api';
import TokenService from '../services/auth/token.service';
import { logout } from '../redux/slices/auth/auth';

const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers['authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig?.url !== '/auth/signin' && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post('/auth/refreshtoken', {
              refreshToken: TokenService.getLocalRefreshToken(),
            });
            const { accessToken } = rs.data;

            dispatch(refresh(accessToken));
            TokenService.updateLocalAccessToken(accessToken);

            return axiosInstance(originalConfig);
          } catch (_error) {
            window.alert('Token đã hết hạn, bạn sẽ bị đăng xuất!');
            dispatch(logout());
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;
