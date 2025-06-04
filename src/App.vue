<template>
  <div class="grid grid-cols-2 p-4">
    <h2 class="text-4xl font-bold">File Manager</h2>
    <div class="flex justify-end">
      <button class="text-white bg-blue-700 hover:bg-blue-800">Add Folder</button>
    </div>
  </div>
  <div class="grid grid-cols-4 gap-4 p-4">
    <div class="sidebar">
      <SideView/>
    </div>
    <div class="sidecontent">
      <div v-if="store.folderData" class="grid grid-cols-10 gap-4">
        <FolderItem v-for="item in store.folderData.children" :item="item" />
        <FileItem v-for="item in store.folderData.File" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import SideView from './views/SideView.vue';
import FolderItem from './components/FolderItem.vue';
import FileItem from './components/FileItem.vue';
import { useFolderByIdStore } from './store/folder.store';
const store = useFolderByIdStore();
</script>