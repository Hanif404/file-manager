import { getAllFolder, getFolderById } from '../infrastructure/folder.api';

export const showAllFolder = async () => {
  return await getAllFolder();
};

export const showFolderById = async (id: number) => {
  return await getFolderById(id);
};