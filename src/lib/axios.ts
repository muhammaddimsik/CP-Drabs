import axios from "axios";
import { useAuth } from "@/stores/AuthStore";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useAlertStore } from "@/stores/AlertStore";

interface jwtPayload {
  exp: number;
  iat: number;
}

const BASEURL = import.meta.env.VITE_BASE_URL;
const setAccessToken = useAuth.getState().setAccessToken;
const accessToken = useAuth.getState().accessToken;
const setAlert = useAlertStore.getState().setAlert;

export const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  const accessToken = useAuth.getState().accessToken;
  if (!accessToken) {
    const accessToken = useAuth.getState().accessToken;
    req.headers.Authorization = `Bearer ${accessToken}`;
  }

  const user = jwt_decode<jwtPayload>(String(accessToken));
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  if (!isExpired) return req;

  const response = await axios.get(`${BASEURL}/refresh-token`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  setAccessToken(response.data.access_token);
  req.headers.Authorization = `Bearer ${response.data.access_token}`;

  return req;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      setAlert(
        "Session kamu sudah kadaluarsa, login kembali untuk mendapatkan session baru!"
      );
    }
    return Promise.reject(error);
  }
);
