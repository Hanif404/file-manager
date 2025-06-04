<template>
    <ul>
        <TreeItem
            v-for="(item, index) in folder"
            :key="index"
            :item="item"
            />
    </ul>
</template>

<script setup>
import { useFolderStore } from '../store/folder.store';
import { onMounted, computed } from 'vue';
import TreeItem from '../components/TreeItem.vue';

const store = useFolderStore();
onMounted(() => store.loadFolder());

const folder = computed(() => store.folder);

</script>