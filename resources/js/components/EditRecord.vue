<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">ID заявки</div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="status">status</label>
                            <select class="form-control" id="status" name="status" v-model="form.status">
                                <option selected disabled>choose</option>
                                <option value="received">received</option>
                                <option value="processing">processing</option>
                                <option value="completed">completed</option>
                                <option value="deleted">deleted</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="description">description</label>
                            <input type="text" class="form-control" id="description" name="description" v-model="form.description">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {update} from "../helpers/update";

    export default {
        name: "EditRecord",
        data(){
            return{
                form:{
                    status: '',
                    description: ''
                },
                error: null
            }
        },
        methods: {
            operation(){
                this.$store.dispatch('update');

                update(this.$data.form)
                    .then((res)=>{
                        this.$store.commit("updateSuccess", res);
                        this.$router.push({path: '/'})
                    })
                    .catch((error)=>{
                        this.$store.commit("updateFailed", {error});
                    })

            }
        }
    }
</script>

<style scoped>

</style>