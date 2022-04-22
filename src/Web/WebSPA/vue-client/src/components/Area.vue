<template>
    <div class="box"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{'box-hovered': hovered}">
        <p>{{name}}</p>
    </div>
    
</template>
<script>
export default {
    name: 'Area',
    data() {
        return {
            hovered: false
        }
    },
    props: {
    name: String,
  },
}
</script>
<style scoped>
.box {
    border-radius: 25px;
    height: 100px;
    width: 150px;
    border: solid 3px #a1a1a1;
    background-color: white;
}
.box-hovered{
    background-color: rgba(145, 145, 145, 0.192);
}
</style>