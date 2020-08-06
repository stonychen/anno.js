import axios from 'axios'
import { baseUrl } from '../utils/base-url';
import { addToken } from './add-token'


export interface IUpload {
  (data: FormData): Promise < AxiosResponse >
}

export const uploadInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { 'Content-Type': 'multipart/form-data' },

})
addToken(uploadInstance)

export const upload = (data: FormData) => {
  return uploadInstance.request({
    url: '/upload',
    method: 'post',
    data,
  })
}
