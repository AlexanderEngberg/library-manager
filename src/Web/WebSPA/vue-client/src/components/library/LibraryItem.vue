<template>
    <div class="toggle-button">
        <div class="status">
            <div class="circle"
            :style="{ backgroundColor: isBorrowed ? 'red' : 'green' }">
            </div>
        </div>
        <div class="toggle-info">
            <h1 id="title">{{title}}</h1>
            <h2 id="type">{{type}}</h2>
            <p v-if="isBorrowed" id="borrower">{{borrower}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'libraryItem',
    props: {
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        borrower: {
            type: String,
            required: false
        },
        isBorrowed: {
            type: Boolean,
            required: true
        }
    }
}
</script>
<style scoped>
.toggle-button {
    border: 1px solid black;
}

#title {
    text-align: left;
}

#borrower {
    text-align: left;;
}

#type {
    text-align: right;;
}
</style>