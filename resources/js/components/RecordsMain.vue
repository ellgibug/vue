<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mb-5">
                    <div class="card-header text-white bg-success">Records</div>

                    <div class="card-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecordsMain"
    }
</script>

<style scoped>

</style>