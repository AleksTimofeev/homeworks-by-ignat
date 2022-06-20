import axios from "axios";

export const api = {
  hw13(success: boolean){
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})
  }
}