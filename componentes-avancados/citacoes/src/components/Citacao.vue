<template>
    <div class="citacao">
        <div class="autor">
            <slot name="autor"></slot>
        </div>
        <slot></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    criated() {
        console.log('criated')
    },
    destroyed() {
        console.log('destroyed')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .autor {
        text-align: center;
    }
</style>