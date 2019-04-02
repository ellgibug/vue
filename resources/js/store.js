import {getLocalRecord} from "./helpers/update";

const record = getLocalRecord();

export default {
    state: {
        currentRecord: record,
        loading: false,
        records:[]
    },
    getters: {
        currentRecord(state){
            return state.currentRecord;
        },
        isLoading(state){
            return state.loading;
        },
        records(state){
            return state.records;
        }

    },
    mutations: {
        update(state){
            state.loading = true;
        },
        updateSuccess(state, payload){
            state.loading = false;
            state.currentRecord = '14 58';
            localStorage.setItem('record', JSON.stringify(state.currentRecord));
        },
        updateFailed(state, payload){
            state.loading = false;
            state.currentRecord = null;
        },
        updateRecords(state, payload){
            state.records = payload;
        }
    },
    actions: {
        update(context){
            context.commit('update');
        },
        getRecords(context){
            axios.get('/api/records').
                then((response)=>{
                    context.commit('updateRecords', response.data.records)
            })
        }
    }
}