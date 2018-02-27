Vue.prototype.$http = axios;

new Vue({
    el: '#app',

    data: {
        skills: []
    },

    mounted() {
        // Make an ajax request to our server - /skills
        // Axios
        axios.get('/skills').then(response => this.skills = response.data);

        // other options
        // fetch()
        // $.ajax(); $.getJson()


        // Vue Resource
        // this.$http.post('/skills', {/* data */});
        // this.$http.get('/skills').then(response => this.skills = response.data);
    }
});