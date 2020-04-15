// Actions：通过异步的方式调用Mutations

const actions =  {
  setTest: ({ commit }, newTest) => {
    return commit('SET_TEST', newTest)
  },
}

export default actions