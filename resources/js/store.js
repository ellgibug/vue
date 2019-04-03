export default {
    state: {
        records:[]
    },
    getters: {
        records(state){
            return state.records;
        }
    },
    mutations: {
        updateRecords(state, payload){
            state.records = payload;
        }
    },
    actions: {
        getRecords(context){
            axios.get('/api/v1').
                then((response)=>{
                    context.commit('updateRecords', response.data.records)
            })
        }
    }
}