<template>
    <div v-if="!!items.length" class="item-list-area">
        <div v-for="(item, index) in items"
        :key="index"
        class="item">
        <LibraryItem
            :title="item.title"
            :type="item.type"
            :isBorrowed="item.isBorrowed"
            :borrower="item.borrower"/>
        </div>
    </div>
</template>

<script>
import items from '../../static/libraryItemData.js'
import LibraryItem from './LibraryItem.vue'

export default {
    name: 'libraryItemList',
    components: {
        LibraryItem
    },
    data() {
        return {
            items: Object
        }
    },
    created() {
        this.items = items
    }
}
</script>

<style scoped>
.item-list-area {
}
.item {
    padding: 5px;
}
</style>
