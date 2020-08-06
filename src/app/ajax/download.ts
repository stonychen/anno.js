/* eslint-disable no-irregular-whitespace */
import axios from 'axios'
import { baseUrl } from '../utils/base-url'
import { addToken } from './add-token'
export interface IDownload {
  (data: any): Promise < AxiosResponse >
}

export const downloadInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  responseType: 'blob'
})

addToken(downloadInstance)

export const download = (data: any) => {
  return downloadInstance.request({
    url: '/download',
    method: 'post',
    data,
  })
}
