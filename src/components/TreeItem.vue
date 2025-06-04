<template>
  <div class="ml-4 mt-1">
    <div class="flex items-center cursor-pointer" @click="toggle">
      <span v-if="hasChildren">
        <span>{{ isOpen ? '▼' : '▶' }}</span>
      </span>
      <span class="ml-1" @click="handleChildEvent(item.id)">{{ item.name }}</span>
    </div>

    <div v-if="isOpen && hasChildren" class="ml-4">
      <TreeItem
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';
import { useFolderByIdStore } from '../store/folder.store';

const props = defineProps({
  item: {
    id: Number,
    name: String,
    children: Array
  }
})

const isOpen = ref(false);
const hasChildren = computed(() => Array.isArray(props.item.children) && props.item.children.length > 0);
const toggle = () => {
  if (hasChildren.value) {
    isOpen.value = !isOpen.value;
  }
};

const handleChildEvent = (id) => {
    const store = useFolderByIdStore();
    store.loadFolderById(id);
};
</script>