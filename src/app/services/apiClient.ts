import axios from "axios";
import {environment} from "@/app/environment";

export interface VerifyCaptchaResponse {
  success: boolean;
  token?: string;
}

const baseUrl = environment.baseApiUrl;

export const verifyCaptcha = async (
  token: string
): Promise<VerifyCaptchaResponse> => {
  try {
    const response = await axios.post(`${baseUrl}/api/recaptcha`, { token });
    const jwtToken = response.data.token;
    return { success: true, token: jwtToken };
  } catch (error) {
    return { success: false };
  }
};

export const sendEmail = async (
  email: string,
  name: string,
  phone: string,
  message: string,
  token: string
): Promise<boolean> => {
  try {
    await axios.post(
      `${baseUrl}/api/contact`,
      {
        email,
        name,
        phone,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch (error) {
    return false;
  }
};
