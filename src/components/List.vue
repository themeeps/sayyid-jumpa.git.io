<template>
    <h1>
        List User
    </h1>
    
    <div class="list-page">
        {{list}}
    </div>
    

    <!-- <div v-for=" data in list" :key="data" class="list">
        {{ list.name }}
    </div> -->

</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            list: null
        }
    },

    mounted () {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => (this.list = response))
    }
}

</script>