<template>
    <div v-if="record">
        <div class="user-info">
            <form @submit.prevent="update">
                <table class="table">
                    <tr>
                        <th>ID</th>
                        <td>{{ record.id }}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{{ record.name }}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{{ record.phone }}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>
                            <div class="form-group">
                            <select class="form-control" id="status" name="status" v-model="record.status">
                                <option selected disabled>choose</option>
                                <option value="received">received</option>
                                <option value="processing">processing</option>
                                <option value="completed">completed</option>
                                <option value="deleted">deleted</option>
                            </select>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <div class="form-group">
                                <input type="text" class="form-control" id="description" name="description" v-model="record.description">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <router-link to="/v1" class="btn">Cancel (Back to all records)</router-link>
                        </td>
                        <td class="text-right">
                            <input type="submit" value="Update" class="btn btn-primary">
                        </td>
                    </tr>
                </table>
            </form>
            <div v-if="record.status === 'completed' || record.status === 'received'">
                <form @submit.prevent="destroy">
                    <input type="submit" value="Delete" class="btn btn-danger">
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "RecordUpdate",
        created() {
            if (this.records.length) {
                this.record = this.records.find((record) => record.id == this.$route.params.id);
            } else {
                axios.get(`/api/v1/${this.$route.params.id}`)
                    .then((response) => {
                        this.record = response.data.record
                    });
            }
        },
        data() {
            return {
                record: {
                    status: '',
                    description: '',
                    csrf: '',
                },
                errors: null
            };
        },
        mounted() {
            this.csrf = $('meta[name="csrf-token"]').attr('content');
        },
        computed: {
            records() {
                return this.$store.getters.records;
            }
        },
        methods:{
            update() {
                axios.patch(`/api/v1/${this.$route.params.id}`, this.$data.record)
                    .then((response) => {
                        this.$router.push('/v1');
                    });
            },
            destroy() {
                axios.delete(`/api/v1/${this.$route.params.id}`, this.$data.record)
                    .then((response) => {
                        this.$router.push('/v1');
                    });
            },
        }
    }
</script>

<style scoped>

</style>