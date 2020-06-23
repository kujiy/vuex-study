<template>
    <div class="hello">
        <hr>
        Inside component
        <input v-model="compTitleVuex">
    </div>
</template>

<script>

    export default {
        name: 'HelloWorld',
        computed: {
            compTitleVuex: {
                get() {
                    return this.$store.state.moduleA.mymsg
                },
                set(value) {
                    console.log(value);
                    this.$store.commit('moduleA/setMsg', value)
                }
            }
        }
    }
</script>

