/*
 * @Description:
 * @Autor: zhangcl
 * @Date: 2022-01-06 14:04:18
 * @LastEditors: zhangcl
 * @LastEditTime: 2022-01-07 14:05:44
 */
import api from './index'

export function getInfoDetail(params) {
  return api({
    url: '/info/detail',
    method: 'get',
    params,
    baseURL: '/mock/' // 正式接口地址可不添加baseURL
  })
}
