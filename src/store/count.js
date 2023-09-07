export default {
    namespaced: true,
    state: {
        sum: 0,
        name: 'zhangsan',
        sex: 'man',
    },
    getters: {
        bigSum(state){return state.sum * 10}
    },
    mutations: {
        add(state, num) {
            state.sum += num
        },
        reduce(state){
            state.sum--
        },
    },
    actions: {
        asyncAddWait(context, num){
            setTimeout(()=>{
                context.commit('add', num)
            },500)
        },
        asyncAddOdd(context, num){
            if(context.state.sum % 2){
                context.commit('add', num)
            }
        }
    }
}