import axios from 'axios'
import { isPlainObject } from '../utils/fun';
import { baseUrl } from '../utils/base-url';
import antdv from 'ant-design-vue';
import { addToken } from './add-token'

const { Cancel } = axios
const { message } = antdv
export interface IReqestParam {
  function: string;
  [key: string]: any
}
export interface ISuccessData {
  code: string
  data: any
  msg ? : string
}

export interface IReqest {
  (data: IReqestParam, token ? : CancelToken): Promise < AxiosResponse >
}


export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { token: 'abc' },
})

addToken(axiosInstance)

const { interceptors } = axiosInstance
interceptors.response.use(res => {

  const data = res.data as ISuccessData
  if (isPlainObject(data) && data.code) {
    return res
  }
  message.error(`Responded data has an error. It is not a plain object.`)
  return Promise.reject({ status: res.status, res, data, msg: `Responded data has an error. It is not a plain object.` });

}, error => {

  const msg = error.message
  if (error.constructor === Cancel) {
    message.error(`Request canceled.`)
    return Promise.reject({ msg, error });
  }
  const res = error.response
  const req = error.request
  if (!res) {
    message.error(`Request timeout.`)
    return Promise.reject({ req, res, msg, error });
  }
  message.error(`Request has an error. The server respond status ${res.status}`)
  return Promise.reject({ status: res.status, req, msg, error });

});

export const request = (data: IReqestParam, token ? : CancelToken) => {
  const config: AxiosRequestConfig = {
    url: '/api',
    method: 'post',
    data,
  }
  if (token) config.cancelToken = token
  const requestInstance = axiosInstance.request(config)
  return requestInstance
}
