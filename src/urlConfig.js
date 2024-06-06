const BASE_URL = "https://lama-server-5w12.onrender.com";

const urlConfig = {
  LOGIN_URL: `${BASE_URL}/api/auth/login`,
  SIGNUP_URL: `${BASE_URL}/api/user`,
  LOGOUT_URL: `${BASE_URL}/api/auth/logout`,
  POST_PROJECT_URL: `${BASE_URL}/api/project/`,
  GET_PROJECTS_BY_USER_URL: `${BASE_URL}/api/user/projects`,
  POST_FILES_TO_PROJECT_URL: `${BASE_URL}/api/project/:projectId`,
  PATCH_USERNAME_URL: `${BASE_URL}/api/user/`,
  GET_WIDGETS_BY_USER_URL: `${BASE_URL}/api/widgets/`,
  PATCH_WIDGETS_BY_USER_URL: `${BASE_URL}/api/widgets/`,
};

export default urlConfig;
