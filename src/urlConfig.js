const BASE_URL = import.meta.env.VITE_BASE_URL;

const urlConfig = {
  LOGIN_URL: `${BASE_URL}/api/auth/login`,
  SIGNUP_URL: `${BASE_URL}/api/user`,
  LOGOUT_URL: `${BASE_URL}/api/auth/logout`,
  POST_PROJECT_URL: `${BASE_URL}/api/project/`,
  GET_PROJECTS_BY_USER_URL: `${BASE_URL}/api/user/projects`,
  POST_FILES_TO_PROJECT_URL: `${BASE_URL}/api/project/:projectId`,
};

export default urlConfig;
