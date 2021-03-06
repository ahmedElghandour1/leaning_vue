const state = {
    counter: 0
}
const getters = {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => `${state.counter} Clicks`,
}
const mutations = {
    increment: (state, payload) => state.counter += payload,
    decrement: (state, payload) => state.counter -= payload,
}
const actions = {
    asyncIncreament: ({ commit }, payload) => {
        setTimeout(() => commit('increment', payload.by), payload.duration)
    }
}
export default {
    state, getters, mutations, actions
}