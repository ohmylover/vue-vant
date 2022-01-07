/*
 * @Description:
 * @Autor: zhangcl
 * @Date: 2022-01-06 14:04:18
 * @LastEditors: zhangcl
 * @LastEditTime: 2022-01-06 15:28:38
 */
const getters = {
  userName: state => state.app.userName,
  token: state => state.app.token
}
export default getters
