<template>
    <div class="customer-new">
        <form @submit.prevent="add">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="record.name" placeholder="Record Name"/>
                    </td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>
                        <input type="text" class="form-control" v-model="record.phone" placeholder="Record Phone"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link to="/records" class="btn">Cancel</router-link>
                    </td>
                    <td class="text-right">
                        <input type="submit" value="Create" class="btn btn-primary">
                    </td>
                </tr>
            </table>
        </form>
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n') }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import validate from 'validate.js';

    export default {
        name: "NewRecord",
        data() {
            return {

                record: {
                    name: '',
                    phone: '',
                    csrf: 'BOxHYbQnVzFJnAaApoBa3aGwa3sckgsE2nb5NZ14'
                },
                errors: null
            };
        },
        methods: {
            add() {
                this.errors = null;

                const constraints = this.getConstraints();

                const errors = validate(this.$data.record, constraints);

                if(errors) {
                    this.errors = errors;
                    return;
                }

                axios.post('/api/records/new', this.$data.record,{
                    headers:{

                    }
                })
                    .then((response) => {
                        this.$router.push('/records');
                    });
            },
            getConstraints() {
                return {
                    name: {
                        presence: true,
                        length: {
                            maximum: 50,
                            message: '50 is max'
                        }
                    },
                    phone: {
                        presence: true,
                        length: {
                            maximum: 12,
                            message: '12 is max'
                        }
                    }
                };
            }
        }
    }
</script>

<style scoped>

</style>