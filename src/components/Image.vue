<template>
    <h1>
        Photos
    </h1>
    
    <div class="image-page">
        {{image}}
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
            image: null
        }
    },

    mounted () {
        axios
            .get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(response => (this.image = response))
    }
}

</script>