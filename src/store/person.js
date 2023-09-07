import axios from "axios"
import { nanoid } from 'nanoid'

export default {
    namespaced: true,
    state: {
        personList: [{
            id: '0001',
            name: 'Lisi'
        }]
    },
    getters: {
        firstPersonName(state) {return state.personList[0].name}
    },
    mutations: {
        addPerson(state, value) {
            state.personList.unshift(value)
        }
    },
    actions: {
        addPersonWang(context, value) {
            if(value.name.indexOf('王') === 0){
                context.commit('addPerson', value)
            }else {
                alert('添加的人必须为王')
            }
        },
        addPersonServer(context) {
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('addPerson', {id: nanoid(), name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    }
}