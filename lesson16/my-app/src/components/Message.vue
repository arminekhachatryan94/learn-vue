<template>
    <div class="box">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'message',

    }
</script>

<style>
    .box { background: pink; padding: 10px; border: 1px solid magenta; margin-bottom: 1em; }
</style>