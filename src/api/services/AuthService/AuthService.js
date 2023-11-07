import { axiosRequest } from "@api/xhr";

export default class AuthService {
    static async obtainToken(data) {
      return await axiosRequest.post(`obtain-token/`, data);
    }
  }