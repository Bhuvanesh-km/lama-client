const BASE_URL = import.meta.env.VITE_BASE_URL;

const urlConfig = {
  LOGIN_URL: `${BASE_URL}/api/auth/login`,
  LOGOUT_URL: `${BASE_URL}/api/auth/logout`,
  POST_PROJECT_URL: `${BASE_URL}/api/project/`,
  GET_PROJECTS_BY_USER_URL: `${BASE_URL}/api/user/projects`,
};

export default urlConfig;
