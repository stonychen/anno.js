/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  AxiosInstance as AxiosInstanceAlias,
  CancelToken as CancelTokenAlias,
  AxiosRequestConfig as AxiosRequestConfigAlias,
  AxiosResponse as AxiosResponseAlias
} from 'axios'

import Vue, {
  VNode as VNodeAlias,
  ComponentOptions,
  AsyncComponent,
  VNodeData as VNodeDataAlias
} from 'vue'
import { IReqest, IDownload, IUpload } from '@/app/ajax'
import {
  RouteConfig as RouteConfigAlias,
  RawLocation as RawLocationAlias,
  Route as RouteAlias
} from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    readonly $request: IReqest;
    readonly $download: IDownload;
    readonly $upload: IUpload;

    [key: string]: any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions < V extends Vue > {
    [key: string]: any
  }
}

declare global {
  type VNode = Vue.VNode
  type VNodeData = VNodeDataAlias

  type Component = ComponentOptions | typeof Vue | AsyncComponent

  type CreateElement = Vue.CreateElement
  type RenderContext = Vue.RenderContext
  type ComponentOptions = Vue.ComponentOptions < any >
    type RouteConfig = RouteConfigAlias
  type RawLocation = RawLocationAlias
  type Route = RouteAlias
  type AxiosInstance = AxiosInstanceAlias

  type CancelToken = CancelTokenAlias
  type AxiosRequestConfig = AxiosRequestConfigAlias
  type AxiosResponse = AxiosResponseAlias
}
