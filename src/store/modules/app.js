/*
 * @Description:
 * @Autor: zhangcl
 * @Date: 2022-01-06 14:04:18
 * @LastEditors: zhangcl
 * @LastEditTime: 2022-01-06 15:29:15
 */
const state = {
  userName: '',
  token: localStorage.token || ''
}
// 改变状态
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_TOKEN(state, data) {
    state.token = data
  },
  REMOVE_TOKEN(state, data) {
    state.token = ''
  }
}

// 提交mutations
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setToken({ commit }, data) {
    commit('SET_TOKEN', data)
    localStorage.setItem('token', data)
  },
  removeToken({ commit }, data) {
    commit('REMOVE_TOKEN', data)
    localStorage.removeItem('token')
  }
}
export default {
  state,
  mutations,
  actions
}
