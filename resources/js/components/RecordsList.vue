<template>
    <div>
        <div class="btn-wrapper">
            <router-link to="/records/new" class="btn btn-primary btn-sm">New</router-link>
        </div>
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <template v-if="!records.length">
                    <tr colspan="5" class="text-center">No record available</tr>
                </template>
                <template v-else>
                    <tr v-for="record in records" :key="record.id">
                        <td>{{ record.name}}</td>
                        <td>{{ record.phone}}</td>
                        <td>{{ record.created_at}}</td>
                        <td>{{ record.status}}</td>
                        <td>
                            <!--<router-link :to="/record/${record.id}">View</router-link>-->
                            <router-link :to="`/records/${record.id}`">View</router-link>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "RecordsList",
        mounted(){
            this.$store.dispatch('getRecords');
        },
        computed:{
            records(){
                return this.$store.getters.records;
            }
        }
    }
</script>

<style scoped>

</style>