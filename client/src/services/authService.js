import axiosInstance from './axiosInstance';

export async function registerUser(registerFormData) {
  const { fullName, email, password } = registerFormData;

  const { data } = await axiosInstance.post('/api/auth/register', {
    fullName,
    email,
    password,
  });

  return data;
}

export async function loginUser(loginFormData) {
  const { email, password } = loginFormData;

  const { data } = await axiosInstance.post('/api/auth/login', {
    email,
    password,
  });

  return data;
}

export async function logoutUser() {
  const { data } = await axiosInstance.post('/api/auth/logout');
  return data;
}
