import axios from 'axios';

// 人员列表所用的配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, person) {
            if (person.name.indexOf('王') === 0) {
                context.commit("ADD_PERSON", person);
            }
        },
        // 添加头像
        addPersonAvatar(context, id) {
            axios.get('/pics/api/api.php?return=json')
                .then(function (response) {
                    context.commit("ADD_AVATAR", { id, url: response.data.imgurl });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.unshift(value);
        }, 
        ADD_AVATAR(state, value) {
            state.persons.forEach(person => {
                if(person.id === value.id) {
                    this._vm.$set(person,"url",value.url);
                    state.isShow = true;
                }
            })
        }
    },
    state: {
        persons: [],
        isShow: false
    },
    getters: {
        firstPersonName(state) {
            const name = state.persons;
            if (name.length) {
                return name[0].name;
            }
            return "";
        }
    }
}