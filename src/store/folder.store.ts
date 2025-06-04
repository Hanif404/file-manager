import { defineStore } from 'pinia';
import { showAllFolder, showFolderById } from '../usecases/folder.usecase';
import { Folder } from '../domain/folder';

export const useFolderStore = defineStore('folder', {
  state: () => ({
    folder: null as Folder | null,
  }),
  actions: {
    async loadFolder() {
      this.folder = await showAllFolder();
    },
  },
});

export const useFolderByIdStore = defineStore('folderById', {
  state: () => ({
    folderById: null as Folder | null,
  }),
  getters: {
    folderData: (state) => state.folderById
  },
  actions: {
    async loadFolderById(id: number) {
      this.folderById = await showFolderById(id);
    },
  },
});