<template>
    <!-- no action, vue js will handle it -->
    <form @submit.prevent="onSubmitted">
        <div class="form-group">
            <label for="content">Content</label>
            <input
                type="text"
                id="content"
                class="form-control"
                v-model="quoteContent">
            <!-- v-model allows 2 way binding & allows us to get the user input here -->
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                quoteContent: ''
            }
        },
        methods: {
            onSubmitted() {
                axios.post('http://127.0.0.1:8000/api/quote',
                    {content: this.quoteContent})
                    .then(
                        (response) => console.log(response)
                    ).catch(
                        (error) => console.log(error)
                    );
            }
        }
    }
</script>