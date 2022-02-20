// 计算求和所用的配置
export default {
    namespaced: true,
    actions: {
        addWhenOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit("ADDWHENODD", value);
            }
        },
        addLater(context, value) {
            setTimeout(() => {
                context.commit("ADDLATER", value);
            }, 3000);
        }
    },
    mutations: {
        ADD(state, value) {
            state.sum += value;
        },
        MINUS(state, value) {
            state.sum -= value;
        },
        ADDWHENODD(state, value) {
            state.sum += value;
        },
        ADDLATER(state, value) {
            state.sum += value;
        },
    },
    state: {
        sum: 0,
        school: "尚硅谷",
        address: "南京",
        name: "墨非白",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
}